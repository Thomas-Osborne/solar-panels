const express = require('express');
const mongoose = require('mongoose');
const forecastRoutes = require('./routes/forecasts');
require('dotenv').config();

const app = express();

// middleware

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
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    })
    .catch((error => {
        console.log(error);
    }))
