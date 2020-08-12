const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all 
router.get('/practiceRoute', (req,res) => {
    res.send("Hello World!");
})
//getting one 
router.get('/:id',(req,res) => {
    
    
})
//creating one 
router.post('/',(req,res) => {
    
    
})
//updating one 
router.patch('/:id',(req,res) => {
    
    
})
//Deleting one
router.delete('/:id',(req,res) => {
    
    
})

module.exports = router;