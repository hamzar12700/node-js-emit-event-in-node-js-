import bcrypt from "bcryptjs";
import userModels from "../Models/userModels..js";
import jwt from 'jsonwebtoken';

export async function registerController(req, res) {

    console.log(req.body, "====> req.body");

    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) {
            res.status(409).json({ message: 'Input Fields Required' })
        }
        const existing = await userModels.findOne({ email })
        if (existing) return res.status(404).json({ message: 'user already exist' })
        let hash = await bcrypt.hash(password, 10)
        let user = await new userModels({ username, email, password: hash })
        await user.save()
        return res.send({msg : `${username} registered successfully`})
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error.message);
    }


}

export async function loginController(req, res) {
    const { email, password } = req.body
    const existing = await userModels.findOne({ email })
    try {
        if (!email || !password) {
            res.status(409).json({ message: 'Input Fields Required' })
        }
        if (!existing) return res.status(201).json({ message: 'user not found' })
        let isMatch = await bcrypt.compare(password, existing.password)
        if (!isMatch) {
            res.json({ message: 'Password not matched' })
        }
        const token = jwt.sign({
            id: existing._id, email: existing.email
        }, process.env.JWT_SECRET)

        res.json({ message: 'user login successfully', token })
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error.message);
    }


}