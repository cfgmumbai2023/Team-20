const User = require('../Models/User');

exports.signup = async (req, res) => {
    console.log('inside');
    const { email, password, username, image, role,state,district } = req.body;
 
    try {
       // Enrypting password
       bcrypt.hash(password, 12, function (err, has) {
          if (!err) {
               
                const x = new User({ email, password: has, username, image, role,state,district });
       
                x.save(function(error,result){
                  if(error){
                   console.error(error);
                   return res.status(400).json({message:"Username or Email Already exists"});
                  }else{
                     console.log(result);
                     return res.status(200).json({message:"Succesfully Registered"});
                  }
                });
                
             
          }
       })
    }
    catch (err) {
       return res.status(401).json({ message: "Invalid Request" });
    }
 };