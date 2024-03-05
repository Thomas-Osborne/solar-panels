import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import forecastsData from '../forecasts2.json';
import forecastsData2 from '../forecasts2.json';

import React from "react";

export default function App() {

  const [forecasts, setForecasts] = React.useState(forecastsData.forecasts);

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="grow">
            <Body data={forecasts} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}