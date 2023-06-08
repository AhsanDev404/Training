import express from "express"
import dotenv from "dotenv"
import userRouter from "./src/routers/userRouter.js"
import todoRouter from "./src/routers/todoRouter.js"
import cors from "cors";
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api',userRouter)
app.use('/api',todoRouter)

export default app