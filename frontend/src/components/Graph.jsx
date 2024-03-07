import { Area, AreaChart, XAxis, YAxis, Label, Tooltip, CartesianGrid } from 'recharts';

export default function Graph(props) {
    const lastUpdated = new Date(props.updatedAt).toLocaleString();
    const forecasts = props.data[props.chosenDate];

    const formatTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        if (hours % 6 !== 0 || minutes !== 0) {
            return "";
        }
    
        return `${date.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit'})}`;
      };

    function CustomTooltip({ active, payload, label }) {
        if (active) {
            const date = new Date(label);
            return (
                <div className="border-2 border-black rounded-md bg-blue-200 p-2">
                    <h5 className="text-center font-semibold">{`${date.toLocaleString('en-GB', {weekday: "long", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"})}`}</h5>
                    <div className="border border-black"></div>
                    <p><span>Upper Estimate: </span><span>{payload[0].value.toFixed(2)}kW</span></p>
                    <h6><span className="font-bold">Mean Estimate: </span><span className="font-bold">{payload[1].value.toFixed(2)}kW</span></h6>
                    <p><span>Lower Estimate: </span><span>{payload[2].value.toFixed(2)}kW</span></p>
                </div>
            )
        }
        return null; // only show if active
    }
    
    return (
        <div className="flex flex-col items-center">
            <button className="bg-blue-500 text-white text-xl font-medium px-40 py-3 mb-1 mt-1 rounded-lg hover:bg-blue-600" onClick={() => props.handleFetchClick()}>Fetch Data</button>
            <p className="text-gray-700 font-light px-40 pb-3">Last Updated: {lastUpdated}</p>

            <div>
                {props.dates.map(date => 
                    <button 
                        className="bg-blue-300 text-white text-md font-medium px-3 mx-1 rounded-lg hover:bg-blue-400"
                        onClick={() => props.handleDateClick(date)}
                        key={date}
                    >
                        {date}
                    </button>)}
            </div>

            <h3 className="font-bold text-xl py-2">Forecast Data for {props.chosenDate}</h3>
            <div>
                <AreaChart width={800} height={300} data={forecasts}>
                    <XAxis dataKey="period_end" tickLine={false} interval={0} tickFormatter={str => formatTime(str)}>
                        <Label value="Time" position="insideBottom" offset={-5}/>
                    </XAxis>
                    <YAxis>
                        <Label value="Power Output (kW)" angle={-90}/>
                    </YAxis>
                    <Area type="monotone" dataKey="pv_estimate90"></Area>
                    <Area type="monotone" dataKey="pv_estimate"></Area>
                    <Area type="monotone" dataKey="pv_estimate10"></Area>
                    <Tooltip content={<CustomTooltip />}/>
                    <CartesianGrid vertical={false}/>
                </AreaChart>
            </div>
        </div>
    )
}