const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 7000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));