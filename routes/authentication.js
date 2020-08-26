const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const credentials = require('../config/default'); 



router.post('/signin' , async(req , res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        // See if user exists
        if (!user) {
            return res.status(400).json({ error: [{ message: 'Invalid Credentials' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: [{ message: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: user.id,
                name: user.name,
            }
        }

        //Return jsonwebtoken
        const token = jwt.sign(payload, credentials.jwtSecret,{ expiresIn: 360000 });
        
        res.status(200).json({
            data:{
                token:token,
                user:{
                    name:user.name,
                    email:user.email,
                    userType:user.userType,
                }
            },
            success:true,
            message:'Signin Successful'
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server Error: ' + error.message);
    }
});

module.exports = router;