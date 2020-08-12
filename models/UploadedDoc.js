const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadedDocSchema = new Schema({

    userid:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    docname:{
        type: String,
        required: true,
        trim: true
    },
    
    extension: {
        type: String,
        required: true,
        trim: true
        },

    docPath:{
        type: String, 
        required: true,
    },

    doctype:{
        type: String, 
        trim: true
    }

})

const UploadedDoc  = mongoose.model('UploadedDoc', UploadedDocSchema);

module.exports = UploadedDoc;