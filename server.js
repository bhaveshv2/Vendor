const express = require('express');
const connectDB = require('./config/database');
const path = require('path');

const apiPracticeRoutes = require ('./routes/practiceRoute');

const apiUser = require ('../Vendor/routes/user');
const apiBill = require ('../Vendor/routes/BillAPI');
const apiUploadedDoc = require ('../Vendor/routes/UploadedDocAPI');


const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extended: false }));


//@routes Points to Routes Folder

app.use('/', apiPracticeRoutes);

app.use('/user', apiUser);
app.use('/bill',apiBill);
app.use('/UploadedDoc',apiUploadedDoc);

const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

