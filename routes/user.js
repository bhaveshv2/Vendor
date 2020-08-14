const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//get all 
router.get('/', async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

//getting one 
router.get('/:id',getUser, (req,res) => {
    res.json(res.user);
})

//creating one 
router.post('/createuser',async(req,res) => {
    // Email validation 
    // const re = /\S+@\S+\.\S+/
    // if(re.test(req.body.email)){
    //     console.log("Email is correct")
    // }
    // else{
    //     console.log("Email is not correct")
    // }
    // //Existing User check 
    // const allUsers = await User.findOne({'email' : req.body.email});
    // if (allUsers){
    //     throw Error('User already exists');
    // }
    // //Phone number valdidation 
    // const phonenoRe = /^\d{10}$/
    // if (phonenoRe.test(req.body.phoneNo)){
    //     console.log("Phone Number is correct")
    // }
    // else {
    //     console.log("phone number is not correct")
    // }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNo: req.body.phoneNo,
        userType: req.body.userType
    });

    // const salt = await bcrypt.genSalt(10);

    // user.password = await bcrypt.hash(req.body.password, salt)

    try{
        const newUser= await user.save();
        res.status(201).json(newUser);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message : err.message});
    }
   
})
//updating one /patch/put
router.patch('/updateUser/:id',getUser, async (req,res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }
    if(req.body.phoneNo != null){
        res.user.phoneNo = req.body.phoneNo
    }
    if(req.body.userType != null){
        res.user.userType = req.body.userType
    }
    try{
        const updatedUser = await res.user.name()
        res.json(updatedUser)
    }
    catch(err){
        return res.status(400).json({"message": err.message})
    }
    
})
//Deleting one
router.delete('/deleteUser/:id',getUser, async (req,res) => {
    try{
        await res.user.remove()
        res.json({"message": 'User deleted'})

    }   
    catch(err){
        return res.status(500).json({"message": err.message})
    } 
    
})

async function getUser(req, res, next){
    try{
        user = await User.findById(req.params.id)
        if(user == null)
            return res.status(404).json({"message": 'Cannot find User'})
    }
    catch(err){
        return res.status(500).json({"message": err.message})

    }
    res.user = user
    next()
}


module.exports = router;