import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e.message);
  });
app.listen(process.env.PORT, () => {
  console.log("server is working");
});
