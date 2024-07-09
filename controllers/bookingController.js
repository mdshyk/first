const Booking = require('./../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllBookings = catchAsync(async (req, res, next) => {
        const bookings = await Booking.find({
            user : req.user._id
        });

        if (!bookings || bookings.length === 0) {
            return res.status(404).json({
              status: 'fail',
              message: 'No bookings found for this user.'
            });
          }

        res.status(200).json({
            status: 'success',
            results: bookings.length,
            data: {
                bookings
            }
        });
});

exports.getBooking = catchAsync(async (req, res, next) => {
        const booking = await Booking.findById(req.params.id);
        if (booking.user !== req.user._id.toString()) {
            return next(
                new AppError('You are restricted', 401)
            );
        }
        res.status(200).json({
            status: 'success',
            data: {
                booking
            }
        });
});


exports.createBooking = catchAsync(async (req, res, next) => {
    req.body.user=req.user._id; 
    const newBooking = await Booking.create(req.body);

        res.status(201).json({
            status:'success',
            data: {
                booking: newBooking
            }
        });
});

exports.updateBooking = catchAsync(async (req, res, next) => {

        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status:'success',
            message: '<Updated booking here...>',
            data: {
                updatedBooking
            },
        });
});

exports.deleteBooking = catchAsync(async (req, res, next) => {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status:'success',
            message: '<Booking Successfully Deleted...>',
            data: {
            }
        });
});