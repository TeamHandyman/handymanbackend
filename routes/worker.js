const express = require('express')
const router = express.Router()
const {getWorker, getCus, getWorkerbyId, getCusbyId, getAllWorker, changeStatus, getClientCount, getAccepted, getRejected}  = require('../controllers/workerController')


router.route('/').get(getWorker)
router.route('/accepted').get(getAccepted)
router.route('/rejected').get(getRejected)
router.route('/customer').get(getCus)
router.route('/:workerID').get(getWorkerbyId)
router.route('/customer/:clientID').get(getCusbyId)
router.route('/getCusCount').get(getClientCount)
router.route('/changeStatus/:workerID').put(changeStatus)
router.route('/WoCount').get(getAllWorker)
///router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports =  router