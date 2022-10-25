const express = require('express')
const router = express.Router()
const {getTicketsOpen, getTicketsClosed, getTicketsOpened, getAllTicket, changeStatus} = require('../controllers/ticketsController')


router.route('/').get(getAllTicket)
router.route('/getTicketsOpen').get(getTicketsOpen)
router.route('/getTicketsClosed').get(getTicketsClosed)
router.route('/getTicketsOpened').get(getTicketsOpened)
router.route('/changeStatus/:ticketID').put(changeStatus)


module.exports =  router