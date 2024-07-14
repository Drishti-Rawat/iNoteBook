const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

// create a user using: POST "api/auth/". Doesnt require auth
router.post('/',[
    body('name').isLength({min:3}).withMessage("name must be atleast 3 characters"),
    body('email').isEmail().withMessage("Enter valid Email "),
    body('password').isLength({ min: 5 }).withMessage("Password must be atleast 5 characters")
] ,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,

    }).then(user=>res.json(user))
    .catch(err=>console.log(err),
    res.json({error:"please enter a unique value for email"}))

})

module.exports = router