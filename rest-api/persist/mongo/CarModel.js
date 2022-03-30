const mongoose = require('mongoose');
const {mongo} = require("mongoose");

const carSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cars',carSchema);
