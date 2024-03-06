const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forecastSchema = new Schema({
    forecasts: [{
        pv_estimate: Number,
        pv_estimate10: Number,
        pv_estimate90: Number,
        period_end: Date,
        period: String,
    }]
}, { timestamps: true });

module.exports = mongoose.model('Forecast', forecastSchema);