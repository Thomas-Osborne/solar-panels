import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';
import { determineFixedDate, splitData } from '../../../backend/controllers/splitDataController';
import React, { useState, useEffect } from "react";

export default function Body() {
    const [allData, setAllData] = useState([]);
    const [initialData, setInitialData] = useState(null);
    const [dates, setDates] = useState([]);
    const [chosenDate, setChosenDate] = useState("");
    const [forecasts, setForecasts] = useState({});

    useEffect(() => {
        fetchForecasts();
    }, []);

    async function fetchForecasts() {
        try {
            const res = await fetch('http://localhost:4000/api/forecasts');
            if (!res.ok) {
                throw new Error('Failed to fetch forecasts');
            }
            const json = await res.json();
            setAllData(json);
        } catch (error) {
            console.error('Error fetching forecasts:', error);
        }
    }

    useEffect(() => {
        if (allData.length > 0) {
            const newInitialData = allData[0];
            setInitialData(newInitialData);

            const newDates = Object.keys(splitData(newInitialData.forecasts));
            setDates(newDates);

            const newChosenDate = determineFixedDate(newInitialData.forecasts);
            setChosenDate(newChosenDate);
            
            setForecasts(splitData(newInitialData.forecasts));
        }
    }, [allData]);

    function updateDate(date) {
        setChosenDate(date);
    }

    function updateForecasts(data) {
        const newDates = Object.keys(splitData(data));
        const newDate = determineFixedDate(data);
        setDates(newDates);
        setChosenDate(newDate);
        setForecasts(splitData(data));
    }

    return (
        <main className="h-screen flex flex-col">
            <div className="rounded-xl mx-5 my-1 px-5 h-3/5 flex">
                <div className="w-1/5 flex flex-col px-2">
                    <Box name="Previous Records" content={<History oldData={allData} handleClick={updateForecasts} />} />
                </div>
                <div className="w-4/5 flex flex-col px-2">
                    <Box name="Graph" content={<Graph data={forecasts} dates={dates} chosenDate={chosenDate} updatedAt={initialData?.updatedAt} handleFetchClick={fetchForecasts} handleDateClick={updateDate}/>} />
                </div>
            </div>
            <div className="rounded-xl mx-5 my-1 px-5 h-2/5 flex">
                <div className="w-1/2 flex flex-col px-2">
                    <Box name="Calculator" content={<Calculator />} />  
                </div>
                {/* <div className="w-1/2 flex flex-col px-2">
                    <Box name="Estimates" content={<Estimates data={forecasts} chosenDate={chosenDate} handleClick={updateDate}/>} /> 
                </div> */}
            </div>
        </main>
    );
}