const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    }).sort('departs');
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;
    const flight = new Flight(req.body);
    flight.save(function(err) {
    if (err) return res.render('flights/new');
    res.redirect('/flights');
  });
}