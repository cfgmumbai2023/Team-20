const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const Course = require('./Models/Course');
const User = require('./Models/User');



require("dotenv").config();
const app = express();
// app.use(cors());
app.use(express.json());
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'sdfghjuytdcvjytrdtyhbiuytegvbjiuytdty';

app.use(morgan('dev'));
app.use(bodyParser.json({limit:'2mb'}))
app.use(cors(({
  credentials : true,
  origin : 'http://localhost:3002 ',
})));


mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 7000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));


app.post('/register' , async (req , res) =>{
  console.log("hello");
  const {user,email,password,contact,expertise,no_Coached,no_Certificate} = req.body;
  let lvl = 'Beginner';

  try{
      const userDoc = await User.create({
              name:user,
              email,
              password,
              contact,
              expertise,
              matches_coached:no_Coached,
              certifications:no_Certificate,
              varified:false,
              type:'coach',
              level:lvl,
      });

      res.json(userDoc);
  }catch(e){
      console.log(e);
      res.status(422).json(e);
  }
})

app.get('/login' , async(req,res) => {
  const {email , password} = req.body;
  const userDoc = await User.findOne({email});

  if(userDoc.password == password){
    res.json('Sign Successfully');
  }else{
    res.status(422).json('Something went wrong!');
  }
})

app.get('/test', (req, res) => {
  res.send({msg : "hello"});
})

app.post('/addcourse', async (req, res) => {
  const data = req.body;
  const course = new Course(data);

  await course.save();

  res.send('ok');
})