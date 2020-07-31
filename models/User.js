const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo:{
    type : String
  }, 
  userType: {
    type: String,
    require: true
  }
});

module.exports = User = mongoose.model('User', UserSchema);