const mongoose = require("mongoose");

const workerSchema = mongoose.Schema(
    {
      fname: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      lname: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      email: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      phone: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      jobType: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      accountStatus: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      district: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      city: {
        type: String,
        required: [true, 'Please add a text value'],
      },
      gender: {
        type: String,
        required: [true, 'Please add a text value'],
      },
    },
    {
      timestamps: true,
    }
  )
  
  module.exports = mongoose.model('user', workerSchema)