import React from "react";

export default function Configuration(props)  {

    console.log(props.configuredValues);
    
    return (
        <div>
            <form>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Total Battery Capacity</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Total battery capacity..."
                        onChange={props.handleChange}    
                        name="totalBatteryCapacity"
                        value={props.configuredValues.totalBatteryCapacity}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Maximum Charging Hours</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Maximum charging hours..."
                        onChange={props.handleChange}
                        name="maxChargingHours"
                        value={props.configuredValues.maxChargingHours}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Daily Usage</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Daily usage..."
                        onChange={props.handleChange}
                        name="dailyUsage"
                        value={props.configuredValues.dailyUsage}
                    />
                </div>
            </form>
        </div>
    )
}