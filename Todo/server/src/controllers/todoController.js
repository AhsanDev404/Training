import { catchAsyncError } from "../middleware/catchAsync.js";

import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createTodo = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return next(new ErrorHandler(400, "Todo not created"));
  }
  user.todo.push({ title, description });

  await user.save();

  return res.status(201).json({
    success: true,
    message: "todo is created",
  });
});

// export const updateTodo = catchAsyncError(async(req,res,next)=>{
//     const id = req.params.id;
//     const user = await User.findById({_id:id})
//     if(!user){
//         return next(new ErrorHandler(400, "user not found"));
//     }
//     const {taskId} = req.body.id

// })
