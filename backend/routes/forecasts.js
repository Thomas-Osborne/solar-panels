const express = require('express');
const Forecast = require('../models/Forecast');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all Forecasts'});
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET a single Forecast'});
})

router.post('/', async (req, res) => {
    const { forecasts } = req.body
    try {
        const forecast = await Forecast.create({ forecasts });
        res.status(200).json(forecast);
    } catch {
        res.status(400).json({error: error.message});
    }
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a single Forecast'});
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a single Forecast'});
})

module.exports = router;