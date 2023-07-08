const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 7000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));