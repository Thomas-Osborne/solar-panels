const express = require('express');
const cors = require('cors')

const mongoose = require('mongoose');
const forecastRoutes = require('./routes/forecasts');
require('dotenv').config();

const { isSufficientTime, fetchExternalForecast } = require('./utils/fetchExternalForecast');

const app = express();

// middleware

app.use(cors({ origin: `http://localhost:${process.env.FRONTEND_PORT}`}));

app.use(express.json()); // can get json body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/forecasts', forecastRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to DB")
        // listen for requests
        app.listen(process.env.BACKEND_PORT, () => {
            isSufficientTime()
                .then(result => {
                    if (result) {
                        fetchExternalForecast()
                            .then(forecasts => console.log(forecasts));
                    } else {
                        console.log("Insufficient time elapsed to fetch from Solcast.");
                    }
                });
        })
    })
    .catch((error => {
        console.log(error);
    }))
