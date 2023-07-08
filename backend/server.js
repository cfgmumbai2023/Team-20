const express = require("express");
<<<<<<< HEAD
=======
const app = express();
const cors = require('cors')
>>>>>>> 054dc1e7baecce312d47308bff0d66110612c67d
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const Course = require('./Models/Course');

app.use(cors());
app.use(express.json());

require("dotenv").config();
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'2mb'}))
app.use(cors());

fs.readdirSync('./routes').map((r)=> app.use("/backend",require('./Routes/' + r)));

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 7000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));


app.get('/test', (req, res) => {
  res.send({msg : "hello"});
})

app.post('/addcourse', async (req, res) => {
  const data = req.body;
  const course = new Course(data);

  await course.save();

  res.send('ok');
})