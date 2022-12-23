const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/users")
dotenv.config();

app.use(cors({
    origin:"*"
}))

mongoose.set('strictQuery', true)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json());
  app.get("/", (req, res) =>
  res.send(`Server Running......`)
)

app.use("/",userRoute);


  app.listen(process.env.PORT || 8800 , ()=>{
    console.log(`Backend server runing`);
  })