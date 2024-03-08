const Forecast = require('../models/Forecast');
const mongoose = require('mongoose');


async function getForecasts(req, res) {
    const forecasts = await Forecast.find({ }).sort({ updatedAt: -1 });
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

async function createForecast(req, res) {
    const { forecasts } = req.body

    try {
        const forecast = await Forecast.create({ forecasts });
        return res.status(200).json(forecast);
    } catch {
        return res.status(400).json({error: error.message});
    }
}

async function deleteForecast(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }

    const forecast = await Forecast.findOneAndDelete({ _id: id });

    if (!forecast) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }
    
    return res.status(200).json(forecast);

}

async function updateForecast(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }

    const forecast = await Forecast.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!forecast) {
        return res.status(404).json({error: 'Forecast does not exist.'});
    }
}

async function fetchForecast(req, res) {
    res.json({message: "this works"});
}


module.exports = { getForecasts, getForecast, createForecast, deleteForecast, updateForecast, fetchForecast };