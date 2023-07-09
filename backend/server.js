const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

const {Course} = require('./Models/Course');
const {User} = require('./Models/User');

app.use(cors());
app.use(express.json());

require("dotenv").config();
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

app.post('/getUser', async (req, res)=>{
  const result = await User.findOne({email: req.body.email, password: req.body.pass})

  res.send(result);
})

app.post('/register', async (req, res) => {
  const data = req.body;
  const user = new User(data);

  let ret = await user.save();

  res.send('ok');
})

app.post('/addcourse', async (req, res) => {
  const data = req.body;
  const course = new Course(data);

  let ret = await course.save();

  res.send('ok');
})