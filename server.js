const express = require('express');
const connectDB = require('./config/database');
const path = require('path');
const apiPracticeRoutes = require ('./routes/practiceRoute');

const app = express();

//Connect to Database
connectDB();

//@routes Points to Routes Folder
app.use('/', apiPracticeRoutes);

const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

