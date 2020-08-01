const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({

    userid:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    billNumber:{
        type: String,
        required: true,
        trim: true
    },
    
    billFileName: {
        type: String,
        required: true,
        trim: true
        },

    billPath:{
        type: String, 
        required: true,
    },

    supportingDoc:{
        type: Array,  
    },
    billUploadDate:{
        type: Date,
        required: true
    },
    billProcessed:{
        type : Boolean,
    },
    billApproved:{
        type : Boolean,
    },
    billRejected:{
        type : Boolean,
    },
    dateOfRejection: {
        type: Date
    },
    dateOfApproval: {
        type: Date
    },
    transId:{
        type : String
    },
    gstNumber:{
        type: String
    },
    remark:{
        type: String
    },
    tds:{
        type: Number
    },
    billAmount:{
        type: Number
    },
    gstAmount:{
        type: Number
    },
    billTotalAmount:{
        type: Number
    }


});

module.exports = UploadedDoc  = mongoose.model('Bill', BillSchema);