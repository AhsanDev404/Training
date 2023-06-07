import express from "express"
import dotenv from "dotenv"
import userRouter from "./src/routers/userRouter.js"
import todoRouter from "./src/routers/todoRouter.js"
dotenv.config()

const app = express()


app.use(express.json())

app.use('/api',userRouter)
app.use('/api',todoRouter)

export default app