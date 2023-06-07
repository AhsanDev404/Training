import ErrorHandler from "../utils/errorHandler.js"
import { joiUserLoginSchema, joiUserRegisterSchema } from "../utils/joiSchema.js"

export const joiRegistration = (req,res,next)=>{
    const {error} = joiUserRegisterSchema.validate(req.body)
    if(error){
        return next(new ErrorHandler(400 , error.details[0].message))
    }
    next()
} 
export const joiLogin = (req,res,next)=>{
    const {error} = joiUserLoginSchema.validate(req.body)
    if(error){
        return next(new ErrorHandler(400 , error.details[0].message))
    }
    next()
} 