const asyncHandler = require('express-async-handler')
const Worker = require('../models/workers')

const getWorker = asyncHandler(async (req, res) => {
    const workers = await Worker.find({ "accountStatus": "pending"})
    res.send(workers)
  })

  const updateStatus =asyncHandler( async(req, res) => {
    const status = await Worker.findById(req.params.id)

    if (!status) {
      res.status(400)
      throw new Error('worker not found')
    }
  
    const updatedStatus = await Worker.findByIdAndUpdate(req.params.id, { accountStatus: 'accepted' }, {
        new: true,
      })
    
      res.status(200).json(updatedStatus)
})
    const getCus = asyncHandler(async (req, res) => {
      const cust = await Worker.find({ "userType" : "customer"})
      res.send(cust)
    })

  module.exports = {
    getWorker, updateStatus, getCus
}