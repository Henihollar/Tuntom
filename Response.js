const mongoose = require('mongoose');

const ResponseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        // minLength: 5
    },
    textarea:{
        type: String, 
        required: true,
        // minLength: 10
    }
})

module.exports = mongoose.model('Response', ResponseSchema);