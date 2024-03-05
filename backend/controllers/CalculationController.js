const AV_BATTERY_VOLTAGE = 52;
const MAX_CURRENT = 70;
const MAX_CHARGING_HOURS = 6;
const TOTAL_BATTERY_CAPACITY = 24.3;


function calculateValues(chargingHours, desiredIncrease) {
    let newRequiredKwh = (TOTAL_BATTERY_CAPACITY) * (desiredIncrease) / 100;
    let newKwPerHourRate = (newRequiredKwh) / Math.min(chargingHours, MAX_CHARGING_HOURS);
    let newCurrent = Math.min(newKwPerHourRate * 1000 / AV_BATTERY_VOLTAGE, MAX_CURRENT);

    return {
        requiredKwh: newRequiredKwh,
        currentValue: newCurrent
    };
}

export { calculateValues };