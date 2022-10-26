const asyncHandler = require('express-async-handler')
const Jobs = require('../models/jobs')


const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Jobs.find()
    res.send(jobs)
  })



module.exports = {
    getJobs
}