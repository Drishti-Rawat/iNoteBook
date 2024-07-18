const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// adding hasing to the password
const bcrypt = require("bcryptjs");
// json web token
var jwt = require("jsonwebtoken");

const JWT_SECRET = "HeyItsaSecret";

// Route 1 : create a user using: POST "api/auth/". Doesnt require auth
router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("name must be atleast 3 characters"),
    body("email").isEmail().withMessage("Enter valid Email "),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be atleast 5 characters"),
  ],
  async (req, res) => {

    let success = false
    // if there aree errors. retuen bad request and the errors
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success:false
      return res.status(400).json({ success,errors: errors.array() });
    }

    try {
      // check whetehr the user email exist already
      let user = await User.findOne({success, email: req.body.email });
      if (user) {
        success:false
        return res
          .status(400)
          .json({ success,error: "Sorry a user with this email is already exists." });
      }

      //   adding hash and salt to the password to keep the password secure and protected
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //   creating user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //   setting up auth token
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
     success=true
      //   res.json(user);
      res.json({success, authtoken: authtoken });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server  error occured");
    }
  }
);

// Route 2 : authenticate a user using POST : "/api/auth/login" , no login required
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid Email "),
    body("password").exists().withMessage("Password can't be blank"),
  ],
  async (req, res) => {
    let success = false
    // if there aree errors. retuen bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // find user it it exists or not
      let user = await User.findOne({ email: email });
      if (!user) {
        success=false
        return res
          .status(400)
          .json({success, error: "Please try to login with correct Credentials" });
      }

      // check the password it is correct or not
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        success=false
        return res
          .status(400)
          .json({success, error: "Please try to login with correct Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
          name:user.name
        },
      };

      const authtoken = jwt.sign(payload, JWT_SECRET);
      success=true
      res.json({success, authtoken });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ success: false, error: "Internal Server error occurred" });
    }
  }
);

//  Route 3 : Get loggedin user details sing post : /api/auth/getuser , login required
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server error occured");
  }
});

module.exports = router;