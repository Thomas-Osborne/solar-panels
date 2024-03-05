import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { determineFixedDate, splitData } from '../backend/controllers/SplitDataController';

import forecastsData from '../forecasts.json';
import forecastsData2 from '../forecasts2.json';

import React from "react";

export default function App() {

  const testingData = [
    {id: 1, data: forecastsData.forecasts, date: "11/02/2024"},
    {id: 2, data: forecastsData2.forecasts, date: "05/03/2024"}
  ];
  
  const initialData = testingData.find(x => x.id === 1).data;
  const initialKey = determineFixedDate(initialData);

  const [forecasts, setForecasts] = React.useState(splitData(initialData)[initialKey]);

  function updateForecasts(id) {
    const newData = testingData.find(x => x.id === id).data;
    const newKey = determineFixedDate(newData);

    setForecasts(splitData(newData)[newKey]);
  }

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="grow">
            <Body 
              oldData = {testingData}
              data={forecasts}
              handleClick={updateForecasts}  
            />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}