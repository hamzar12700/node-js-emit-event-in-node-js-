import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './Routes/formRoutes.js'
import cors from 'cors'
import { dbConnect } from './database/db.js'

let app = express()
app.use(express.json())
app.use(cors())

dotenv.config()
let PORT = process.env.PORT || 2000


app.get('/',(req,res)=>{
    res.send('server is running successfully')
})

app.use('/', authRoutes)

dbConnect()

app.listen(3000, () => {
    console.log('server is running on', PORT);

})