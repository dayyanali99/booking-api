const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    roomNumbers: {
        type: [
            {
                number: Number,
                unavailableDates: [Date]
            }
        ]
    }
});

module.exports = mongoose.model('Room', roomSchema);