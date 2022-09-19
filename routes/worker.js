const express = require('express')
const router = express.Router()
const {getWorker, getCus}  = require('../controllers/workerController')


router.route('/').get(getWorker)
router.route('/customer').get(getCus)
//router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports =  router