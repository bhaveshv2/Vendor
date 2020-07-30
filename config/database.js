const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongomongodb+srv://VendorPortalDb:VendorPortalDb@vendorcluster.zgvk5.mongodb.net/<dbname>?retryWrites=true&w=majorityURI');

const connectDB = async () => {
    try {
        await mongoose.connect('mongomongodb+srv://VendorPortalDb:VendorPortalDb@vendorcluster.zgvk5.mongodb.net/VendorPortalDb?retryWrites=true&w=majorityURI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('Database connected');
    } catch (error) {
        console.log(error.message);

        process.exit(1);
    }
}

module.exports = connectDB;
