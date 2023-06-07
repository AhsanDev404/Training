import express from "express"
import { createTodo } from "../controllers/todoController.js"


const todoRouter = express.Router()

todoRouter.route('/todo/create/:id').post(createTodo)


export default todoRouter