const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
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
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
    });
}