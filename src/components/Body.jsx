import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';

import { determineFixedDate, splitData } from '../../backend/controllers/SplitDataController';

import forecastsData from '../../forecasts.json';
import forecastsData2 from '../../forecasts2.json';

import React from "react";

export default function Body() {

    const testingData = [
        {id: 1, data: forecastsData.forecasts, date: "11/02/2024"},
        {id: 2, data: forecastsData2.forecasts, date: "05/03/2024"}
    ];
      
    const initialData = testingData.find(x => x.id === 1).data;
    const initialKeys = Object.keys(splitData(initialData));
    const initialKey = determineFixedDate(initialData);

    const [dates, setDate] = React.useState(initialKeys);
    const [chosenDate, setChosenDate] = React.useState(initialKey);

    const [forecasts, setForecasts] = React.useState(splitData(initialData)[initialKey]);

    function updateDate(date) {
        console.log(date);
    }

    function updateForecasts(id) {
        const newData = testingData.find(x => x.id === id).data;
        const newDates = Object.keys(splitData(newData))
        const newDate = determineFixedDate(newData);

        setKeys(newDates);
        setChosenKey(newDate);
        setForecasts(splitData(newData)[newDate]);
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
                    <Box name="Estimates" content={<Estimates data={forecasts}/>} />
                </div>
            </div>
      </main>
    )
}