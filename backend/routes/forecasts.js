const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all Forecasts'});
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET a single Forecast'});
})

router.post('/:id', (req, res) => {
    res.json({message: 'POST a new Forecast'});
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a single Forecast'});
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a single Forecast'});
})

module.exports = router;