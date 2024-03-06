import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';

import { determineFixedDate, splitData } from '../../../backend/controllers/splitDataController';

import forecastsData from '../../forecasts.json';

import React from "react";

export default function Body() {

    const [test, setTestingData] = React.useState([{id: 1, forecasts: forecastsData.forecasts, date: formatDatetime(forecastsData.forecasts[0].period_end)}]);

    React.useEffect(() => {
        async function fetchForecasts() {
            const res = await fetch('http://localhost:4000/api/forecasts');
            const json = await res.json();

            if (res.ok) {
                setTestingData(json);
            }
        }

        fetchForecasts();
    }, []);

    function formatDatetime(date) {
        const d = new Date(date);
        return d.toLocaleString('en-GB', {day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit"})
    }
      
    const initialData = test[0]; // sorted by descending order

    const initialKeys = Object.keys(splitData(initialData.forecasts));
    const initialDate = determineFixedDate(initialData.forecasts);

    const [dates, setDates] = React.useState(initialKeys);
    const [chosenDate, setChosenDate] = React.useState(initialDate);

    const [forecasts, setForecasts] = React.useState(splitData(initialData.forecasts));

    function updateDate(date) {
        setChosenDate(date);
    }

    function updateForecasts(data) {
        const newData = data;
        const newDates = Object.keys(splitData(newData))
        const newDate = determineFixedDate(newData);

        setDates(newDates);
        setChosenDate(newDate);
        setForecasts(splitData(newData));
    }

    return (
        <main className="h-screen flex flex-col">
            <div className="rounded-xl mx-5 my-1 px-5 h-3/5 flex">
                <div className="w-1/5 flex flex-col px-2">
                    <Box name="Previous Records" content={<History oldData={test} handleClick={updateForecasts} />} />
                </div>
                <div className="w-4/5 flex flex-col px-2">
                    <Box name="Graph" content={<Graph data={forecasts} dates={dates} chosenDate={chosenDate} updatedAt={initialData.updatedAt} handleClick={updateDate}/>} />
                </div>
            </div>
            <div className="rounded-xl mx-5 my-1 px-5 h-2/5 flex">
                <div className="w-1/2 flex flex-col px-2">
                    <Box name="Calculator" content={<Calculator />} />  
                </div>
                <div className="w-1/2 flex flex-col px-2">
                    <Box name="Estimates" content={<Estimates data={forecasts} chosenDate={chosenDate} handleClick={updateDate}/>} />
                </div>
            </div>
      </main>
    )
}