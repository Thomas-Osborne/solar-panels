const express = require('express');
const cors = require('cors')
const axios = require('axios');

const mongoose = require('mongoose');
const forecastRoutes = require('./routes/forecasts');
require('dotenv').config();

const app = express();

const url = `https://api.solcast.com.au/rooftop_sites/57d0-1c18-af49-84b3/forecasts?format=json`;

const config = {
    headers: {
        'Authorization': `Bearer ${process.env.SOLCAST_API}`
    }
};

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
            console.log(`Listening on port ${process.env.BACKEND_PORT}`);
            // retrieve data from external API
            // axios.get(url, config)
            //     .then(response => {
            //         console.log(response.data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })
        })
    })
    .catch((error => {
        console.log(error);
    }))
