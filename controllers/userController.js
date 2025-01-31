const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
});

exports.getUser = catchAsync(async (req, res, next) => {
    const users = await User.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    });
});

exports.createUser = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const newUser = await User.create(req.body);

    res.status(201).json({
        status:'success',
        data: {
            user: newUser
        }
    });
});


exports.updateUser = catchAsync(async (req, res, next) => {
    if (req.params.id!== req.user.id) {
        return next(new AppError('Restricted Access', 403));
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status:'success',
        message: '<Updated user here...>',
        data: {
            user
        },
    });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    if (req.params.id!== req.user.id) {
        return next(new AppError('Restricted Access', 403));
    }
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status:'success',
        message: '<User Deleted...>',
        data: {
        }
    });
});