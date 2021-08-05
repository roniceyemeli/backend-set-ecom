const express = require("express");
const path = require('path');
require("dotenv").config({path: "./config/.env" });
const connectDB = require("./config/connectDB");
const cookieParser = require('cookie-parser');






const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();


//our Routes
app.use('/user', require('./routes/userRouter'))

app.use('/user', require('./routes/productRouter'))

// app.use('/admin', require('./routes/productRouter'))




  const PORT = process.env.PORT || 6000;
  app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on port ${PORT}`)
  );
  