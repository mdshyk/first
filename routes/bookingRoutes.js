const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();


router
    .route('/')
    .get(authController.protect, bookingController.getAllBookings)
    .post(authController.protect, bookingController.createBooking);

router
    .route('/:id')
    .get(authController.protect, bookingController.getBooking)
    .patch(authController.protect, authController.restrictTo('admin'), bookingController.updateBooking)
    .delete(authController.protect, authController.restrictTo('admin'), bookingController.deleteBooking);

module.exports = router;