const axios = require('axios');
require('dotenv').config();

const url = `https://api.solcast.com.au/rooftop_sites/57d0-1c18-af49-84b3/forecasts?format=json`;

const config = {
    headers: {
        'Authorization': `Bearer ${process.env.SOLCAST_API}`
    }
};

// Function to fetch data from the external API
async function fetchExternalForecast() {
    try {
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { fetchExternalForecast };