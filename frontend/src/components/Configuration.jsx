import React from "react";

export default function Configuration()  {

    const [formData, setFormData] = React.useState(
        {
            totalBatteryCapacity: 24.3,
            maxChargingHours: 6,
            dailyUsage: 18,
        }
    )

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
                    <label className="font-semibold">Total Battery Capacity</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Total battery capacity..."
                        onChange={handleChange}    
                        name="totalBatteryCapacity"
                        value={formData.totalBatteryCapacity}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Maximum Charging Hours</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Maximum charging hours..."
                        onChange={handleChange}
                        name="maxChargingHours"
                        value={formData.maxChargingHours}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Daily Usage</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Daily usage..."
                        onChange={handleChange}
                        name="dailyUsage"
                        value={formData.dailyUsage}
                    />
                </div>
            </form>
        </div>
    )
}