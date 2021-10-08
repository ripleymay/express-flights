const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        String,
    },
    flightNo: Number,
    departs: {
        Date
    }
});

module.exports = mongoose.model('Flight', flightSchema);