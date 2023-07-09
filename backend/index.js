import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection open");
  })
  .catch((err) => {
    console.log("MongoDB connection error");
    console.error(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  photo: { data: Buffer, contentType: String },
  phoneNumber: String,
  sports: String,
  experience: Number,
  license: Number,
  verification: { type: Boolean, default: false },
  type: { type: String, default: "Coach" },
});

const User = mongoose.model("User", userSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.send({ message: "An error occurred" });
    });
});

app.post("/register", upload.single("photo"), (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    sports,
    experience,
    license,
  } = req.body;
  const photo = req.file;
  const newUser = new User({
    name,
    email,
    password,
    photo: { data: photo.buffer, contentType: photo.mimetype },
    phoneNumber,
    sports,
    experience,
    license,
  });
  newUser
    .save()
    .then(() => {
      res.send({ message: "Successfully registered. Please login now." });
    })
    .catch((err) => {
      console.error(err);
      res.send({ message: "An error occurred" });
    });
});

app.listen(9002, () => {
  console.log("Backend server started at port 9002");
});
