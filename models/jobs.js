const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema(
    {
      jobName: {
        type: String,
        
      },
      jobCategori: {
        type: String,
        
      },
      description: {
        type: String,
      },
      Status: {
        type: String,
      },
    },
  )
  
  module.exports = mongoose.model('jobs', jobsSchema)