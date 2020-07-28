const express = require('express');
const connectDB = require('./config/database');
const path = require('path');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});