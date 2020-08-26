const express = require('express');
const connectDB = require('./config/database');
const path = require('path');
const apiUser = require ('../Vendor/routes/user');
const apiBill = require ('../Vendor/routes/BillsAPI');
const apiUploadedDoc = require ('../Vendor/routes/UploadedDocAPI');
const auth = require('./routes/authentication');
const cors = require('cors');

const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

//@routes Points to Routes Folder
app.use('/user', apiUser);
app.use('/bill',apiBill);
app.use('/UploadedDoc',apiUploadedDoc);
app.use('/auth',auth);

const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

