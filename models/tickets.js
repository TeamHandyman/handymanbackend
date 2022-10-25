const mongoose = require("mongoose");

const ticketsSchema = mongoose.Schema(
    {
      fName: {
        type: String,
        
      },
      lName: {
        type: String,
        
      },
      email: {
        type: String,
        
      },
      userType: {
        type: String,
        
      },
      issue: {
        type: String,
        
      },
      status: {
        type: String,
        
      },
    },
    {
      timestamps: true,
    }
  )
  
  module.exports = mongoose.model('tickets', ticketsSchema)