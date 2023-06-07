import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false,
  },
  todo:[
    {
      title: String,
      description: String,
      status: {
        type: String,
        default: "pending",
      },
    }
  ],
  
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET)
}
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword , this.password)
}

const User = mongoose.model("User", userSchema);

export default User;
