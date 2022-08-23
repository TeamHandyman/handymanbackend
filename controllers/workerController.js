const asyncHandler = require('express-async-handler')
const Worker = require('../models/workers')

const getWorker = asyncHandler(async (req, res) => {
    const workers = await Worker.find({ accountStatus: 'pending'})
    
    res.send(workers)
  })
  module.exports = {
    getWorker
}