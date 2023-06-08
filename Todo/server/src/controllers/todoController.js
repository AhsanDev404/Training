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

export const getTodo = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return next(new ErrorHandler(400, "Todo not created"));
  }

  return res.status(200).json({
    success: true,
    todo: user.todo,
  });
});

export const deleteTodo = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const todo = req.params.todo;

  const user = await User.findOne({ _id: id });

  let array = user.todo.filter((obj) => obj._id != todo);

  user.todo = [...array];
  await user.save();
  res.status(200).json({
    todo: user.todo,
  });
});
export const updateTodo = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const todo = req.params.todo;
  const { title, description } = req.body;

  const user = await User.findOne({ _id: id });

  let array = user.todo.map((obj) => {
    if (obj._id == todo) {
      obj.title = title;
      obj.description = description;
    }
    return obj;
  });

  console.log(array);

  user.todo = [...array];
  await user.save();
  res.status(201).json({
    todo: user.todo,
  });
});


