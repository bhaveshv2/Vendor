const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');

//get all 
router.get('/', async(req,res) => {
    try{
        const bills = await Bill.find();
        res.json(bills);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

//getting one 
router.get('/:id',getBill, (req,res) => {
    res.json(res.Bill);
});

//creating one 
router.post('/createBill',async(req,res) => {
    const Bill = new Bill({
        //need to see how to add users
        billNumber: req.body.billNumber,
        billFileName: req.body.billFileName,
        billPath: req.body.billPath,
        billUploadDate: req.body.billUploadDate,
        billProcessed: req.body.billProcessed,
        billApproved: req.body.billApproved,
        billRejected: req.body.billRejected,
        dateOfRejection: req.body.dateOfRejection,
        dateOfApproval: req.body.dateOfApproval,
        transId: req.body.transId,
        gstNumber: req.body.gstNumber,
        remark: req.body.remark,
        tds: req.body.tds,
        billAmount: req.body.billAmount,
        gstAmount: req.body.gstAmount,
        billTotalAmount: req.body.billTotalAmount
    });
    try{
        const newBill= await Bill.save();
        res.status(201).json(newBill);
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
   
})
//Need to a find better way to update. //Update left 
//updating one /patch/put
router.patch('/updateBill/:id',getBill, async (req,res) => {

    try{
        const updatedBill = await res.Bill.name()
        res.json(updatedBill)
    }
    catch(err){
        return res.status(400).json({"message": err.message})
    }
    
})
//Deleting one
router.delete('/deleteBill/:id',getBill, async (req,res) => {
    try{
        await res.Bill.remove()
        res.json({"message": 'Bill deleted'})

    }   
    catch(err){
        return res.status(500).json({"message": err.message})
    } 
    
})

async function getBill(req, res, next){
    try{
        Bill = await Bill.findById(req.params.id)
        if(Bill == null)
            return res.status(404).json({"message": 'Cannot find Bill'})
    }
    catch(err){
        return res.status(500).json({"message": err.message})

    }
    res.Bill = Bill
    next()
}
module.exports = router;