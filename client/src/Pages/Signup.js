import React, { useState } from "react";
import { Avatar, Grid , Paper, Typography } from "@mui/material";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [contact , setContact] = useState("");
  const [expertise , setExpertise] = useState('');
  const [no_Coached , setNo_coached] = useState(0);
  const [no_Certificate, setNo_certificate] = useState(0);
  

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) alert("Not a valid email ");

      try{
          await axios.post('/register' , {
              user,
              email,
              password,
              expertise,
              no_Coached,
              no_Certificate,
              contact,
          })
          alert("Registration Successfull! Now, you can log in");
      }catch(e){
          alert("Registration Failed! Please try again later!");
      }
  };

  const paperStyle = {
    padding:20,
    height:'80vh',
    width:'50vh',
    margin:'50px auto',
  }

  const avatarStyle = {backgroundColor:'#518ad2'};

  return (
    <>
    <Header />
      <Grid sx={{mt:15}}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
            <h2>Sign up</h2>
          </Grid>

          <TextField
            value={user}
            onChange={updateUser} 
            id="standard-basic" 
            variant="standard" 
            label='Name' 
            placeholder="John Doe" 
            className="mt-4"
            fullWidth required/>

          <TextField
            value={email}
            onChange={updateEmail} 
            id="standard-basic" 
            variant="standard" 
            label='Username' 
            placeholder="xyz@email.com" 
            className="mt-3"
            fullWidth required/>

          <TextField 
            value={password}
            onChange={updatePassword}
            id="standard-basic" 
            variant="standard"  
            label='Password' 
            placeholder="********" 
            type="password" 
            className="mt-3"
            fullWidth required/>

            <TextField 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="standard-basic" 
            variant="standard"  
            label='Contact' 
            placeholder="7000000000" 
            type="number" 
            className="mt-3"
            fullWidth required/>

            <TextField 
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            id="standard-basic" 
            variant="standard"  
            label='any@sport' 
            placeholder="Expertise"  
            className="mt-3"
            fullWidth required/>

            <TextField 
            value={no_Coached}
            onChange={(e) => setNo_coached(e.target.value)}
            id="standard-basic" 
            variant="standard"  
            label='No. of Matched Coached' 
            placeholder="Any number of games" 
            type="number" 
            className="mt-3"
            fullWidth required/>

            <TextField 
            value={no_Certificate}
            onChange={(e) => setNo_certificate(e.target.value)}
            id="standard-basic" 
            variant="standard"  
            label='Certificates' 
            placeholder="How many?" 
            type="number" 
            className="mt-3"
            fullWidth required/>

          <Button  
            variant="contained" 
            type='submit' 
            onClick={handleSubmit}
            sx={{mt:2}} 
            fullWidth>
              Sign in
          </Button>
          <Typography sx={{mt:1}}>
            <Link to="#">Forget Password ?</Link>
          </Typography>
          <Typography className="">
            <Link to={"/login"}>Already a user? Login here</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
