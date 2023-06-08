import express from "express"
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todoController.js"


const todoRouter = express.Router()

todoRouter.route('/todo/:id').post(createTodo)
todoRouter.route('/todo/:id').get(getTodo)
todoRouter.route('/todo/:id/:todo').delete(deleteTodo)
todoRouter.route('/todo/:id/:todo').put(updateTodo)


export default todoRouter