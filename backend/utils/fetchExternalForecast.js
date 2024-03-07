const axios = require('axios');
require('dotenv').config();

const url = `https://api.solcast.com.au/rooftop_sites/57d0-1c18-af49-84b3/forecasts?format=json`;

const config = {
    headers: {
        'Authorization': `Bearer ${process.env.SOLCAST_API}`
    }
};

async function attemptFetchingData() {
    console.log("In!");
    // const enoughTime = await isSufficientTime()
    // if (enoughTime) {
    //     const forecasts = await fetchExternalForecast();
    //     return forecasts;
    // } else {
    //     console.log("Insufficient time elapsed to fetch from Solcast.");
    //     return;
    // }
}

async function isSufficientTime() {
    const now = Date.now();
    const data = await axios.get(`http://localhost:${process.env.BACKEND_PORT}/api/forecasts`);
    const mostRecent = new Date(data.data[0].updatedAt).getTime();

    const hoursRequired = 4; // number of hours to check since most recent update.
    const timeDifference = hoursRequired * 60 * 60 * 1000; // hours required in miliseconds

    return now - mostRecent > timeDifference;
}

// Function to fetch data from the external API
async function fetchExternalForecast() {
    try {
        const response = await axios.get(url, config);
        console.log(response.data);
        await axios.post(`http://localhost:${process.env.BACKEND_PORT}/api/forecasts`, response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { attemptFetchingData };