import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import forecastsData from '../forecasts.json';
import forecastsData2 from '../forecasts2.json';

import React from "react";

export default function App() {

  const testingData = [
    {id: 1, data: forecastsData.forecasts},
    {id: 2, data: forecastsData2.forecasts}
  ];

  const [forecasts, setForecasts] = React.useState(testingData.find(x => x.id === 1).data);

  function updateForecasts(id) {
    const newForecast = testingData.find(x => x.id === id).data;
    setForecasts(newForecast)
  }

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="grow">
            <Body 
              testingData = {[
                {id: 1, data: forecastsData.forecasts},
                {id: 2, data: forecastsData2.forecasts}
              ]} 
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