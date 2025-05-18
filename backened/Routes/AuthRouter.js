const router = require("express").Router();
const { signup,login } = require("../Controller/AuthController");
const {signupValidation,loginValidation} = require("../Middlewares/AuthValidation.js");

// router.post("/login",(req,res)=>{
//     res.send("login route");
// });

router.post("/login",loginValidation,login);
router.post("/signup",signupValidation,signup);//signupvalidation is already a fuction first argument is validation function and second is the controller function
//signup function tbhi chlega jab validate ho jaega
module.exports = router;