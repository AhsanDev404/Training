import express from "express"
import { getUserDetails, login, register } from "../controllers/userController.js"
import { joiLogin, joiRegistration } from "../middleware/joiMiddleware.js"
import { isAuthenticate } from "../middleware/auth.js"


const userRouter = express.Router()

userRouter.route('/register').post(joiRegistration,register)
userRouter.route('/login').post(joiLogin,login)

userRouter.route('/me').get(isAuthenticate,getUserDetails)

export default userRouter