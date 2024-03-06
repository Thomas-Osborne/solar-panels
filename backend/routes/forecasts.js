const express = require('express');
require('dotenv').config()

const router = express.Router();
const { getForecasts, getForecast, createForecast, deleteForecast, updateForecast, } = require('../controllers/forecastController');

router.get('/', getForecasts);

router.get('/:id', getForecast);

router.post('/', createForecast);

router.delete('/:id', deleteForecast);

router.patch('/:id', updateForecast);

// `https://api.solcast.com.au/data/forecast/rooftop_pv_power?latitude=${process.env.LATITUDE}&longitude=${process.env.LONGITUDE}&output_parameters=pv_power_rooftop&capacity=${process.env.CAPACITY}&format=json&api_key=${process.env.SOLCAST_API}`
module.exports = router;