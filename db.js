const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const db = process.env.MONGOURI;

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('Database Connected....');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

}



module.exports = connectDB