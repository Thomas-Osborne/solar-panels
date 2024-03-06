const express = require('express');
require('dotenv').config()

const router = express.Router();
const { getForecasts, getForecast, createForecast, deleteForecast, updateForecast, } = require('../controllers/forecastController');

router.get('/', getForecasts);

router.get('/:id', getForecast);

router.post('/', createForecast);

router.delete('/:id', deleteForecast);

router.patch('/:id', updateForecast);

module.exports = router;