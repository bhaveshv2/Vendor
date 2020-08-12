const express = require('express');
const router = express.Router();
const UploadedDoc = require('../models/UploadedDoc');

//get all 
router.get('/', async(req,res) => {
    try{
        const UploadedDocs = await UploadedDoc.find();
        res.json(UploadedDocs);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

//getting one 
router.get('/:id',getUploadedDoc, (req,res) => {
    res.json(res.UploadedDoc);
})
//make changes here 
//creating one 
router.post('/createUploadedDoc',async(req,res) => {
    const UploadedDoc = new UploadedDoc({
        //need to see how add user id
        docname: req.body.docname,
        extension: req.body.extension,
        docPath: req.body.passdocPathword,
        doctype: req.body.doctype,
    });
    try{
        const newUploadedDoc= await UploadedDoc.save();
        res.status(201).json(newUploadedDoc);
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
   
})
//updating one /patch/put
router.patch('/updateUploadedDoc/:id',getUploadedDoc, async (req,res) => {
    if(req.body.name != null){
        res.UploadedDoc.name = req.body.name
    }
    if(req.body.email != null){
        res.UploadedDoc.email = req.body.email
    }
    if(req.body.password != null){
        res.UploadedDoc.password = req.body.password
    }
    if(req.body.phoneNo != null){
        res.UploadedDoc.phoneNo = req.body.phoneNo
    }
    if(req.body.UploadedDocType != null){
        res.UploadedDoc.UploadedDocType = req.body.UploadedDocType
    }
    try{
        const updatedUploadedDoc = await res.UploadedDoc.name()
        res.json(updatedUploadedDoc)
    }
    catch(err){
        return res.status(400).json({"message": err.message})
    }
    
})
//Deleting one
router.delete('/deleteUploadedDoc/:id',getUploadedDoc, async (req,res) => {
    try{
        await res.UploadedDoc.remove()
        res.json({"message": 'UploadedDoc deleted'})

    }   
    catch(err){
        return res.status(500).json({"message": err.message})
    } 
    
})

async function getUploadedDoc(req, res, next){
    try{
        UploadedDoc = await UploadedDoc.findById(req.params.id)
        if(UploadedDoc == null)
            return res.status(404).json({"message": 'Cannot find UploadedDoc'})
    }
    catch(err){
        return res.status(500).json({"message": err.message})

    }
    res.UploadedDoc = UploadedDoc
    next()
}
module.exports = router;