const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    // Other fields like budget, vendors, etc.
});

module.exports = mongoose.model('Event', EventSchema);
