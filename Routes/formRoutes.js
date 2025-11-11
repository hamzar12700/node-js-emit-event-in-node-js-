import express from 'express'
import { loginController, registerController } from '../controller/userController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

let authRoutes  = express.Router()


authRoutes.post('/register',registerController)

authRoutes.post('/login', loginController)
authRoutes.post('/profile', verifyToken ,(req,res)=>{
    res.send({message :'Welcome to profile ', user:req.user})
} )

export default authRoutes