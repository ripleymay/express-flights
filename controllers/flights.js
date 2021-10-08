const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight
};

function index(req, res) {
    res.render('flights/index');
}

function newFlight(req, res) {
    res.render('flights/new');
}
