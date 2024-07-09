const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Booking = require('./../../models/bookingModel');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then( () => {
    console.log('DB connection successful!');
});

// READ JSON FILE
const bookings = JSON.parse(fs.readFileSync(`${__dirname}/bookings.json`, 'utf-8'));
// IMPORT DATA INTO DB
const importData = async () => {
    try {
      await Booking.create(bookings);
      console.log('Data successfully loaded!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };

// DELETE DATA FROM DB
const deleteData = async () => {
    try {
      await Booking.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };

  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }