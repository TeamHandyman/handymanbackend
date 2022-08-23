const express = require('express')
const router = express.Router()
const {getWorker}  = require('../controllers/workerController')


router.route('/').get(getWorker)
//router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports =  router