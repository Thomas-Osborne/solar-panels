import React from "react";
import { calculateValues } from '../../../backend/controllers/calculationController';

export default function Calculator(props)  {

    const [formData, setFormData] = React.useState(
        {
            chargingHours: 0,
            desiredIncrease: 0
        }
    )
    
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
                event.target.name === 'desiredIncrease' ? event.target.value : formData.desiredIncrease,
                props.configuredValues
        ));
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
                <hr className="border-t border-black my-2" />
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