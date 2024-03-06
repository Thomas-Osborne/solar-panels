import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';

import { determineFixedDate, splitData } from '../../backend/controllers/SplitDataController';

import forecastsData from '../../forecasts.json';
import forecastsData2 from '../../forecasts2.json';
import forecastsData3 from '../../forecasts3.json';

import React from "react";

export default function Body() {

    function formatDatetime(date) {
        const d = new Date(date);
        return d.toLocaleString('en-GB', {day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit"})
    }

    const testingData = [
        {id: 1, data: forecastsData.forecasts, date: formatDatetime(forecastsData.forecasts[0].period_end)},
        {id: 2, data: forecastsData2.forecasts, date: formatDatetime(forecastsData2.forecasts[0].period_end)},
        {id: 3, data: forecastsData3.forecasts, date: formatDatetime(forecastsData3.forecasts[0].period_end)}
    ];
      
    const initialData = testingData.find(x => x.id === 1).data;
    const initialKeys = Object.keys(splitData(initialData));
    const initialDate = determineFixedDate(initialData);

    const [dates, setDates] = React.useState(initialKeys);
    const [chosenDate, setChosenDate] = React.useState(initialDate);

    const [forecasts, setForecasts] = React.useState(splitData(initialData));

    function updateDate(date) {
        setChosenDate(date);
    }

    function updateForecasts(id) {
        const newData = testingData.find(x => x.id === id).data;
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
                    <Box name="Previous Records" content={<History oldData={testingData} handleClick={updateForecasts} />} />
                </div>
                <div className="w-4/5 flex flex-col px-2">
                    <Box name="Graph" content={<Graph data={forecasts} dates={dates} chosenDate={chosenDate} handleClick={updateDate}/>} />
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