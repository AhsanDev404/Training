import { catchAsyncError } from "../middleware/catchAsync.js";

import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/jwtTokken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  if (user) {
    return sendToken(user, 201, res);
  }
  return next(new ErrorHandler(400, "user not added"));
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler(400, "wrong login or password"));
  }
  const isMatched = await user.comparePassword(password);
  if (!isMatched) {
    return next(new ErrorHandler(400, "wrong login or password"));
  }
  return sendToken(user, 200, res);
});
