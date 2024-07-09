const express = require('express');

const bookingRouter = require('./routes/bookingRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// ROUTES
app.use('/api/v1/bookings', bookingRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;