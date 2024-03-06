import { calculateValues } from '../../backend/controllers/CalculationController';

import React from 'react';

export default function Estimates(props) {

    const NUMBER_OF_FORECASTS = 48;
    const TOTAL_BATTERY_CAPACITY = 24.3;
    const MAX_CHARGING_HOURS = 6;

    const DAILY_USAGE = 18;

    let chargingHours = 6;

    const forecasts = props.data[props.chosenDate];

    const [properties, setProperties] = React.useState({
        chargingHours: 6,
        presentSoc: 10,
        expectedYield: 0,
        desiredIncrease: 0,
        requiredKwh: 0,
        currentValue: 0
    })
    
    React.useEffect(() => {
        const newChargingHours = 6;
        const newPresentSoc = 10;

        const newExpectedYield = estimatePv(forecasts);
        const newDesiredIncrease = estimateDesiredIncrease(forecasts, newChargingHours, newPresentSoc);

        const calculatedValues = calculateValues(chargingHours, newDesiredIncrease);
        const newRequiredKwh = calculatedValues.requiredKwh;
        const newCurrentValue = calculatedValues.currentValue;

        setProperties(prevProperties => ({
            ...prevProperties,
            chargingHours: newChargingHours,
            newPresentSoc: 10,
            expectedYield: newExpectedYield,
            desiredIncrease: newDesiredIncrease,
            requiredKwh: newRequiredKwh,
            currentValue: newCurrentValue
        }))

    }, [forecasts]);    


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

    function estimateDesiredIncrease(data, expectedYield, presentSoc) {
        const DAILY_USE = 18;
        let battery = TOTAL_BATTERY_CAPACITY / 100 * presentSoc;

        const socIncrease = (battery + (DAILY_USE - expectedYield)) / TOTAL_BATTERY_CAPACITY * 100;
        return socIncrease;
    }

    function approximateLoss(data) {
        // TODO
    }

    return (
        <div>
        <div className="flex flex-col py-1">
            <span className="font-semibold">Expected Daily Yield</span>
            <span className="bg-blue-200 text-xl">{properties.expectedYield.toFixed(2)}</span>
        </div>
        <div className="flex flex-col py-1">
            <span className="font-semibold">Charging Hours</span>
            <span className="bg-blue-200 text-xl">{properties.chargingHours}</span>
        </div>
        <div className="flex flex-col py-1">
            <span className="font-semibold">Desired SoC Increase</span>
            <span className="bg-blue-200 text-xl">{properties.desiredIncrease.toFixed(2)}%</span>
        </div>
        <div className="flex flex-col py-1">
            <span className="font-semibold">Required kWh</span>
            <span className="bg-blue-200 text-xl">{properties.requiredKwh.toFixed(2)} kWh</span>
        </div>
        <div className="flex flex-col py-1">
            <span className="font-semibold">Set Current Value</span>
            <span className="bg-blue-200 text-xl">{properties.currentValue.toFixed(2)} A`</span>
        </div>
        </div>
    )
}


