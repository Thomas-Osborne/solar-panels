const axios = require('axios');
require('dotenv').config();

const url = `https://api.solcast.com.au/rooftop_sites/57d0-1c18-af49-84b3/forecasts?format=json`;

const config = {
    headers: {
        'Authorization': `Bearer ${process.env.SOLCAST_API}`
    }
};

async function attemptFetchingData() {
    const data = await axios.get(`http://localhost:${process.env.BACKEND_PORT}/api/forecasts`);
    const now = Date.now();
    const mostRecent = new Date(data.data[0].updatedAt).getTime();

    const enoughTime = isSufficientTime(now, mostRecent);

    // if (enoughTime) {
    //     console.log("Yay")
    //     const forecasts = await fetchExternalForecast();
    //     const dateNow = new Date(now);
    //     const dateMostRecent = new Date(mostRecent);
    
    //     if (dateNow.getFullYear() === dateMostRecent.getFullYear() && dateNow.getMonth() === dateMostRecent.getMonth() && dateNow.getDate() === dateMostRecent.getDate()) {
    //         editLatestForecast(forecasts);
    //         console.log("edited... fingers crossed!");
    //     } else {
    //         addToForecasts(forecasts);
    //     }

    //     return forecasts;
    // } else {
    //     console.log("Insufficient time elapsed to fetch from Solcast.");
    //     return;
    // }
}

function isSufficientTime(now, mostRecent) {
    const hoursRequired = 4; // number of hours to check since most recent update.
    const timeDifference = hoursRequired * 60 * 60 * 1000; // hours required in milliseconds

    return now - mostRecent > timeDifference;
}

// Function to fetch data from the external API
async function fetchExternalForecast() {
    try {
        const response = await axios.get(url, config);
        console.log(response.status);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function addToForecasts(data) {
    await axios.post(`http://localhost:${process.env.BACKEND_PORT}/api/forecasts`, data);
}

async function editLatestForecast(data) {
    await axios.patch(`http://localhost:${process.env.BACKEND_PORT}/api/forecasts`, data);
}

module.exports = { attemptFetchingData };