const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    place: {
        type: String,
        required: [true, 'A booking must have a place']
    },
    duration: Number,
    expense: {
        type: Number,
        required: [true, 'A booking must have an expense']
    },
    user: {
        type: String,
        ref: 'User',
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;