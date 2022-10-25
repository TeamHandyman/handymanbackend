const asyncHandler = require('express-async-handler')
const Tickets = require('../models/tickets')


const getTicketsOpen = asyncHandler(async (req, res) => {
    const tickets = await Tickets.find({status: "pending"})
    res.send(tickets)
  })

const getTicketsClosed = asyncHandler(async (req, res) => {
    const tickets = await Tickets.find({status: "closed"})
    res.send(tickets)
  })

const getTicketsOpened = asyncHandler(async (req, res) => {
    const tickets = await Tickets.find({status: "opened"})
    res.send(tickets)
  })

const getAllTicket =  asyncHandler(async (req, res) => {
    const tickets = await Tickets.find()
    res.send(tickets)
  })

const changeStatus = asyncHandler(async(req, res) => {
    const status = await Tickets.findById(req.params.ticketID)

    if (!status) {
      res.status(400)
      throw new Error('Ticket not found')
    }
    const change = await Tickets.findByIdAndUpdate(req.params.ticketID, {status: req.body.status}, 
      {new: true})
    })  
module.exports = {
    getTicketsOpen, getTicketsClosed, getTicketsOpened, getAllTicket, changeStatus
}