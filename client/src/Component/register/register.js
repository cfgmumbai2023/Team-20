import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    photo: null,
    phoneNumber: "",
    sports: "",
    experience: 0,
    license: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      photo: file,
    }));
  };

  const register = () => {
    const { name, email, password, reEnterPassword, photo, phoneNumber, sports, experience, license } = user;
    if (name && email && password && password === reEnterPassword) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("photo", photo);
      formData.append("phoneNumber", phoneNumber);
      formData.append("sports", sports);
      formData.append("experience", experience);
      formData.append("license", license);

      axios
        .post("http://localhost:9002/register", formData)
        .then((res) => {
          alert(res.data.message);
          history.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <br />
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Photo:
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <br />
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Sports:
        <input
          type="text"
          name="sports"
          value={user.sports}
          placeholder="Sports"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Experience:
        <input
          type="number"
          name="experience"
          value={user.experience}
          placeholder="Experience"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        License:
        <input
          type="number"
          name="license"
          value={user.license}
          placeholder="License"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Re-enter Password:
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>If you are already registered, please login.</div>
      <div className="login-text" onClick={() => history.push("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
 