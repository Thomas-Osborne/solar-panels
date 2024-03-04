import forecastsData from '../../forecasts.json';

    const NUMBER_OF_FORECASTS = 48;
    const TOTAL_BATTERY_CAPACITY = 24.3;
    const MAX_CHARGING_HOURS = 6;
    const AV_BATTERY_VOLTAGE = 52;
    const MAX_CURRENT = 70;
    const DAILY_USAGE = 18;

    let desiredIncrease;
    let chargingHours;

    const forecasts = forecastsData.forecasts;
    let times = []
    let index;

    const currentTime = new Date();

    let analysedData = [];
    
    for (let i = 0; i < forecasts.length; i++) {
        forecasts[i].period_end = new Date(forecasts[i].period_end); // make it a date object for ease
        console.log(forecasts[i].period_end);
        times.push(forecasts[i].period_end.getTime());
    }

    const today = forecasts[0].period_end;

    const todaysDate = forecasts[0].period_end.getUTCDate();
    const tomorrowsDate = today.getDate() + 1; // DOES NOT WORK FOR END OF MONTHS


    if (currentTime.getHours() <= 5) {
        console.log("Time between 00:00 and 05:00: show today's data.");
        chargingHours = MAX_CHARGING_HOURS - currentTime.getHours() - 1;

        for (let i = 0; i < forecasts.length; i++) {
            if (forecasts[i].period_end.getUTCDate() === todaysDate) {
                analysedData.push(forecasts[i]);
                console.log(analysedData[i].pv_estimate);
            } else {
            break;
            }
        }
        index = 0;
    } else {
        console.log("Time after 05:00: show tomorrow's data.");
        chargingHours = MAX_CHARGING_HOURS;
        for (let i = 0; i < forecasts.length; i++) {
            if (forecasts[i].period_end.getUTCDate() === todaysDate) {
                continue;
            } else if (forecasts[i].period_end.getUTCDate() === tomorrowsDate) {
                analysedData.push(forecasts[i]);
                console.log(forecasts[i].pv_estimate);
            } else {
                break;
            }
        }
    }

    const expectedYield = estimatePv(analysedData);

    desiredIncrease = estimateDesiredIncrease(analysedData, 6, 10);

    let kwPerHoursRequired = (TOTAL_BATTERY_CAPACITY) * (desiredIncrease) / 100;
    let kwPerHourRate = (kwPerHoursRequired) / Math.min(chargingHours, MAX_CHARGING_HOURS);
    let current = Math.min(kwPerHourRate * 1000 / AV_BATTERY_VOLTAGE, MAX_CURRENT);
        
    function estimatePv(data) {
        // use trapezium rule
        const TIME_GRANULARITY = 0.5; // should just find amount of mins between times instead
        let estimate = 0;
        if (data.length == 0) {
            return 0;
        } else if (data.length == 1) {
            return data[0].pv_estimate;
        } else {
            estimate += data[0].pv_estimate;
            for (let i = 1; i < data.length - 1; i++) {
                estimate += 2 * data[i].pv_estimate;
            }
            estimate += data[data.length - 1].pv_estimate;
            estimate /= 2;
            estimate *= TIME_GRANULARITY;
            return estimate;
        }
    }

    function estimateDesiredIncrease(data, expectedYield, currentSoc) {
        const DAILY_USE = 18;
        let battery = TOTAL_BATTERY_CAPACITY / 100 * currentSoc;

        const socIncrease = (battery + (DAILY_USE - expectedYield)) / TOTAL_BATTERY_CAPACITY * 100;
        return socIncrease;
    }

    function approximateLoss(data) {
        // TODO
    }

    export default function Estimates() {
        return (
            <div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Expected Daily Yield</span>
                <span className="bg-blue-200 text-xl">{expectedYield.toFixed(2)}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Charging Hours</span>
                <span className="bg-blue-200 text-xl">{chargingHours}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Desired Increase</span>
                <span className="bg-blue-200 text-xl">{desiredIncrease.toFixed(2)}%</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Required kWh</span>
                <span className="bg-blue-200 text-xl">{kwPerHoursRequired.toFixed(2)} kWh</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Set Current Value</span>
                <span className="bg-blue-200 text-xl">{current.toFixed(2)} A`</span>
            </div>
            </div>
        )
    }


