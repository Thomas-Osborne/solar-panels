import React from "react";

export default function Calculator()  {

    const [formData, setFormData] = React.useState(
        {chargingHours: "", desiredIncrease: ""}
    )

    const [requiredKwh, setRequiredKwh] = React.useState("0");
    const [currentValue, setCurrentValue] = React.useState("0");

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
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
                    <span className="bg-blue-200 text-xl">{requiredKwh}</span>
                </div>
                <div className="flex flex-col py-1">
                    <span className="font-semibold">Set Current Value</span>
                    <span className="bg-blue-200 text-xl">{currentValue}</span>
                </div>
            </div>
        </div>
    )
}