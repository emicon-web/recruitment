require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports.loginUser =  async (req,res,next) => {
    let user = await Users.findOne({ email : req.body.email });
    if(!user) return res.status(400).json({ type: "Not Found", msg: "Invalid Email"}); 

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).json({ type: "Not Found", msg: "Invalid Password" });
    
    if(user.status == false) return res.status(400).json({ type: "Not Found", msg: "Account Disabled ! Contact Admin" });

    const token = jwt.sign({ _id: user._id ,name: user.name ,status: user.status,email:user.email}, process.env.JWT_PRIVATE_KEY ,{ expiresIn : '2h'});
    res.status(200).json({success : true, token: token})
}

module.exports.signupUser =  async (req,res,next) => {
    let user = await Users.findOne({ email : req.body.email });
    if(user) return res.status(400).json({ type: "Invalid", msg: "User is already registered with this Email."});

    user = new Users(_.pick(req.body, ['email','password','name','status']));
    const salt = await bcrypt.genSalt(10);
    
    await user.save((err, doc) => {
        if(!err) { 
            const token = jwt.sign({ _id: user._id ,userRole: user.userRole,status: user.status }, process.env.JWT_PRIVATE_KEY,{ expiresIn : '2h'});
            res.status(200).header('x-auth-token',token).send(_.pick(user, ['_id','name','email','status']));
        }
        else { return next(err); }
    });
}

module.exports.allUsers =  async (req,res,next) => {
    let user = await Users.find({});
    res.status(200).json({success : true,users:user});
}