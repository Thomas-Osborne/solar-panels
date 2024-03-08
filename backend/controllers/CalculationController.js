function calculateValues(chargingHours, desiredIncrease, configuredValues) {
    let newRequiredKwh = (configuredValues.totalBatteryCapacity) * (desiredIncrease) / 100;
    let newKwPerHourRate = (newRequiredKwh) / Math.min(chargingHours, configuredValues.maxChargingHours);
    let newCurrent = Math.min(newKwPerHourRate * 1000 / configuredValues.averageBatteryVoltage, configuredValues.maxCurrent);

    return {
        requiredKwh: newRequiredKwh,
        currentValue: newCurrent
    };
}


export { calculateValues };