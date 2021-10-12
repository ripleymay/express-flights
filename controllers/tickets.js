const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', { flight });
    });
}

function create(req, res) {
    let ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    ticket.save(function (err) {
        res.redirect(`/flights/${req.params.id}`);
    });
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`);
    });
  }