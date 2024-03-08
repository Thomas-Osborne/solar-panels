import React from "react";

export default function Configuration(props)  {  
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
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Present SoC</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Present SoC value..."
                        onChange={props.handleChange}
                        name="presentSoc"
                        value={props.configuredValues.presentSoc}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Average Battery Voltage</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Average Battery Voltage..."
                        onChange={props.handleChange}
                        name="averageBatteryVoltage"
                        value={props.configuredValues.averageBatteryVoltage}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Maximum Current Set Value</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="number"
                        placeholder="Maximum current set value..."
                        onChange={props.handleChange}
                        name="maxCurrent"
                        value={props.configuredValues.maxCurrent}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Present Hour (24-hour)</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="text"
                        placeholder="Type true or false..."
                        onChange={props.handleChange}
                        name="presentHours"
                        value={props.configuredValues.presentHours}
                    />
                </div>
            </form>
        </div>
    )
}