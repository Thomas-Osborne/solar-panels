const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forecastSchema = new Schema({
    forecasts: [{
        pv_estimate: {
            type: Number,
            required: true,
        },
        pv_estimate10: {
            type: Number,
            required: true,
        },
        pv_estimate90: {
            type: Number,
            required: true,},
        period_end: {
            type: Date,
            required: true,
        },
        period: {
            type: String,
            required: true,
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Forecast', forecastSchema);