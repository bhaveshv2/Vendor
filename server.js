const express = require('express');
const connectDB = require('./config/database');
const path = require('path');
const cors = require('cors');

const apiPracticeRoutes = require ('./routes/practiceRoute');

const apiUser = require ('../Vendor/routes/user');
const apiBill = require ('../Vendor/routes/BillsAPI');
const apiUploadedDoc = require ('../Vendor/routes/UploadedDocAPI');
const auth = require('./routes/authentication');


const app = express();
app.use(cors());

//Connect to Database
connectDB();

app.use(express.json({ extended: false }));


//@routes Points to Routes Folder

app.use('/', apiPracticeRoutes);

app.use('/user', apiUser);
app.use('/bill',apiBill);
app.use('/UploadedDoc',apiUploadedDoc);
app.use('/auth',auth);

const PORT =  8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

