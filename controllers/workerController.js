const asyncHandler = require('express-async-handler')
const Worker = require('../models/workers')

const getAllWorker = asyncHandler(async (req, res) => {
  const workers = await Worker.find({ userType: "worker"})
  res.send(workers)
})


const getWorker = asyncHandler(async (req, res) => {
    const workers = await Worker.find({ userType: "worker", accountStatus: "pending"})
    res.send(workers)
  })
  const getAccepted = asyncHandler(async (req, res) => {
    const workers = await Worker.find({ userType: "worker", accountStatus: "Accept"})
    res.send(workers)
  })

  const getRejected = asyncHandler(async (req, res) => {
    const workers = await Worker.find({ userType: "worker", accountStatus: "Reject"})
    res.send(workers)
  })

  const getWorkerbyId = asyncHandler(async (req, res) => {
    const workers = await Worker.findById(req.params.workerID)
    if (!workers) {
      res.status(400)
      throw new Error('worker not found')
    }
    res.send(workers)
  })
  const getCusbyId = asyncHandler(async (req, res) => {
    const workers = await Worker.findById(req.params.clientID)
    if (!workers) {
      res.status(400)
      throw new Error('worker not found')
    }
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
      const cust = await Worker.find({ userType : "customer"})
      res.send(cust)
    })

   
  const getClientCount = asyncHandler(async (req, res)=> {
    const rowCount = await Worker.countDocuments({userType: "customer"})
    res.send(rowCount)
  }) 

  const changeStatus = asyncHandler(async(req, res) => {
    const status = await Worker.findById(req.params.workerID)

    if (!status) {
      res.status(400)
      throw new Error('worker not found')
    }
    const change = await Worker.findByIdAndUpdate(req.params.workerID, {accountStatus: req.body.status}, 
      {new: true})
    })
  module.exports = {
    getWorker, updateStatus, getCus, getWorkerbyId, getCusbyId,getAllWorker, changeStatus, getClientCount, getAccepted, getRejected
}