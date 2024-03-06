const express = require('express');
require('dotenv').config();

const app = express();
const forecastRoutes = require('./routes/forecasts');

// middleware

app.use(express.json()); // can get json body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/forecasts', forecastRoutes);

// listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})