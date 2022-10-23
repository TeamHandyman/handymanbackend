const express = require('express')
const router = express.Router()
const {getWorker, getCus, getWorkerbyId, getCusbyId}  = require('../controllers/workerController')


router.route('/').get(getWorker)
router.route('/customer').get(getCus)
router.route('/:workerID').get(getWorkerbyId)
router.route('/customer/:clientID').get(getCusbyId)
///router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports =  router