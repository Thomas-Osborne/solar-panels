const Forecast = require('../models/Forecast');
const mongoose = require('mongoose');

async function getForecasts(req, res) {
    const forecasts = await Forecast.find({ }).sort({ createdAt: -1 });
    return res.status(200).json(forecasts);
}

async function getForecast(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }

    const forecast = await Forecast.findOne({ _id: id });

    if (!forecast) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }

    return res.status(200).json(forecast);
}

module.exports = { getForecasts, getForecast };