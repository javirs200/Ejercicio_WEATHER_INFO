import React from "react";
import './WeatherList.css'
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from "uuid";

const WeatherList = ({ weather,cityName }) => {

  // console.log(weather,cityName);

  const drawList = () => {
    return weather.map((day, i) =>
      <WeatherCard key={uuidv4()}
        weather={day.weather[0].description}
        date={day.dt_txt}
        icon={day.weather[0].icon} />)
  }

  return (
    <>
    <h2>ciudad : {cityName}</h2>
    <div className="weatherList">{drawList()}</div>
    </>
  );
};

export default WeatherList;