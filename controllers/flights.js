const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    }).sort('departs');
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const date = newFlight.departs;
    // reformat the date
    let departs = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    departs += `-${date.getDate().toString().padStart(2, '0')}T${date.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departs });
}

function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.sort((destn1, destn2) => destn1.arrival < destn2.arrival ? -1 : 1);
        const destns = flight.destinations.map(dest => dest.airport);
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { flight, tickets, destns });
        });
    });
}