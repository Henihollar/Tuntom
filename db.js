require('dotenv').config({path:__dirname+'/.env'});
const mongoose = require('mongoose');
const db = process.env.MONGOURI;

const connectDB = () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('Database Connected....');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

}



module.exports = connectDB;