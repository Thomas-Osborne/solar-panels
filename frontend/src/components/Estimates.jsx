import { calculateValues } from '../../../backend/controllers/calculationController';

import React from 'react';

export default function Estimates(props) {
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

        const calculatedValues = calculateValues(properties.chargingHours, newDesiredIncrease);
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

    }, [forecasts, props.configuredValues]);    


    function estimatePv(data) {
        if (data !== undefined) {
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
    }

    function estimateDesiredIncrease(data, expectedYield, presentSoc) {
        if (data !== undefined) {
            const DAILY_USE = 18;
            let battery = props.configuredValues.totalBatteryCapacity / 100 * presentSoc;

            const socIncrease = (battery + (DAILY_USE - expectedYield)) / props.configuredValues.totalBatteryCapacity * 100;
            return socIncrease;
        }
    }

    function approximateLoss(data) {
        // TODO
    }

    return (
        <div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Expected Daily Yield</span>
                <span className="bg-blue-200 text-xl">{properties.expectedYield ? `${properties.expectedYield.toFixed(2)} kW` : "0 kW"}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Charging Hours</span>
                <span className="bg-blue-200 text-xl">{properties.chargingHours}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Desired SoC Increase</span>
                <span className="bg-blue-200 text-xl">{properties.desiredIncrease ? `${properties.desiredIncrease.toFixed(2)}%` : "0%"}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Required kWh</span>
                <span className="bg-blue-200 text-xl">{properties.requiredKwh ? `${properties.requiredKwh.toFixed(2)} kWh`: "0 kWh"}</span>
            </div>
            <div className="flex flex-col py-1">
                <span className="font-semibold">Set Current Value</span>
                <span className="bg-blue-200 text-xl">{properties.currentValue ? `${properties.currentValue.toFixed(2)} A` : "0 A"}</span>
            </div>
        </div>
    )
}


