import express from "express"
import { login, register } from "../controllers/userController.js"
import { joiLogin, joiRegistration } from "../middleware/joiMiddleware.js"

const userRouter = express.Router()

userRouter.route('/register').post(joiRegistration,register)
userRouter.route('/login').post(joiLogin,login)

export default userRouter