const express = require('express');
const cors = require('cors')
const axios = require('axios');

const mongoose = require('mongoose');
const forecastRoutes = require('./routes/forecasts');
require('dotenv').config();

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
        // listen
        app.listen(process.env.BACKEND_PORT, () => {
            console.log(`Listening on port ${process.env.BACKEND_PORT}`);
            axios('http://localhost:4000/api/forecasts')
                .then(response => {
                    console.log(response.data[0])
                })
                .catch(error => {
                    console.log(error);
                })
        })
    })
    .catch((error => {
        console.log(error);
    }))
