import React from "react";

export default function Calculator()  {

    const [formData, setFormData] = React.useState(
        {
            chargingHours: 0,
            desiredIncrease: 0
        }
    )

    console.log(formData);

    const [calculations, setCalculations] = React.useState(
        {
            requiredKwh: 0,
            currentValue: 0
        }
    )

    function handleChange(event) {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

        setCalculations(
            calculateValues(
                event.target.name === 'chargingHours' ? event.target.value : formData.chargingHours,
                event.target.name === 'desiredIncrease' ? event.target.value : formData.desiredIncrease
        ));
    }


    function calculateValues(chargingHours, desiredIncrease) {
        const AV_BATTERY_VOLTAGE = 52;
        const MAX_CURRENT = 70;
        const MAX_CHARGING_HOURS = 6;
        const TOTAL_BATTERY_CAPACITY = 24.3;

        let newRequiredKwh = (TOTAL_BATTERY_CAPACITY) * (desiredIncrease) / 100;
        let newKwPerHourRate = (newRequiredKwh) / Math.min(chargingHours, MAX_CHARGING_HOURS);
        let newCurrent = Math.min(newKwPerHourRate * 1000 / AV_BATTERY_VOLTAGE, MAX_CURRENT);

        return {
            requiredKwh: newRequiredKwh,
            currentValue: newCurrent
        };
    }

    
    return (
        <div>
            <form>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Charging Hours</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Hours for charging..."
                        onChange={handleChange}    
                        name="chargingHours"
                        value={formData.chargingHours}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Desired SoC Increase</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Increase wanted..."
                        onChange={handleChange}
                        name="desiredIncrease"
                        value={formData.desiredIncrease}
                    />
                </div>
                <br />
                <div className="flex justify-center">
                    <input type="submit"  className="bg-blue-500 text-white text-xl font-medium px-10 py-3 mb-1 mt-1 rounded-lg hover:bg-blue-600" />
                </div>
            </form>

            <div>
                <div className="flex flex-col py-1">
                    <span className="font-semibold">Required kWh</span>
                    <span className="bg-blue-200 text-xl">{calculations.requiredKwh.toFixed(2)} kWh</span>
                </div>
                <div className="flex flex-col py-1">
                    <span className="font-semibold">Set Current Value</span>
                    <span className="bg-blue-200 text-xl">{calculations.currentValue.toFixed(2)} A</span>
                </div>
            </div>
        </div>
    )
}