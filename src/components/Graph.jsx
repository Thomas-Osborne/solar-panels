import forecastsData from '../../forecasts.json';
import { CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip } from 'recharts';

export default function Graph() {

    const forecasts = forecastsData.forecasts;
    console.log(forecasts)

    const formatTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Add leading zero if needed
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        console.log(hours)
        if (hours % 12 !== 0 || minutes !== 0) {
            return "";
        }

        if (hours == 0 && minutes == 0) {
            return(`${date.toLocaleDateString()} ${formattedHours}:${formattedMinutes}`);
        }
    
        return `${formattedHours}:${formattedMinutes}`;
      };

    function CustomTooltip({ active, payload, label }) {
        if (active) {
            const date = new Date(label);
            return (
                <div className="border-2 border-black rounded-md bg-blue-200 p-2">
                    <h5 className="text-center font-semibold">{`${date.toDateString()} ${formatTime(label)}`}</h5>
                    <div className="border border-black"></div>
                    <p><span>Upper Estimate: </span><span>{payload[0].value}</span></p>
                    <h6><span className="font-bold">Mean Estimate: </span><span className="font-bold">{payload[1].value}</span></h6>
                    <p><span>Lower Estimate: </span><span>{payload[2].value}</span></p>
                </div>
            )
        }
        return null; // only show if active
    }
    
    return (

        <div>
            <button className="bg-blue-500 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-600">Test Button</button>
            <AreaChart width={400} height={300} data={forecasts}>
                <XAxis dataKey="period_end" tickLine={false} interval={0} tickFormatter={str => formatTime(str)}/>
                <YAxis />
                <Area type="monotone" dataKey="pv_estimate90"></Area>
                <Area type="monotone" dataKey="pv_estimate"></Area>
                <Area type="monotone" dataKey="pv_estimate10"></Area>
                <CartesianGrid />
                <Tooltip content={<CustomTooltip />}/>
            </AreaChart>
        </div>
    )
}