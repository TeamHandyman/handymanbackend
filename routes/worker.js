const express = require('express')
const router = express.Router()
const {getWorker, getCus, getWorkerbyId, getCusbyId, getWorkerCount, changeStatus, getClientCount}  = require('../controllers/workerController')


router.route('/').get(getWorker)
router.route('/customer').get(getCus)
router.route('/:workerID').get(getWorkerbyId)
router.route('/customer/:clientID').get(getCusbyId)
router.route('/getCount').get(getWorkerCount)
router.route('/getCusCount').get(getClientCount)
router.route('/changeStatus/:workerID').put(changeStatus)
///router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports =  router