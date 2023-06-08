const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  const option = {
    httpOnly: true,
    
  };


  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    user,
    token,
  });
};
export default sendToken;
