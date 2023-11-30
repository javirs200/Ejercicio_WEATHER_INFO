import React, { useEffect, useState } from "react";
import './WeatherList.css'
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from "uuid";

const WeatherList = ({ city }) => {

  //http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}

  //http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  const [Weather, setWeather] = useState([])

  const getWeather = async () => {
    try {
      const api_key = import.meta.env.VITE_API_KEY
      //get coordinates from the city
      const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`);
      const data = await resp.json();
      if (data) {
        //console.log(data);
        if (data.length > 0) {
          const lat = data[0].lat
          const lon = data[0].lon
          //console.log('nombre:' ,data[0].name,' latitud:',data[0].lat,' logitud',data[0].lon);
          //&cnt=1
          const resp2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&cnt=10&units=metric&lang=es`);
          const data2 = await resp2.json();

          setWeather(data2.list)

        }
      }

    } catch (error) {

      console.log('error llama api -> ', error);

    }
  };

  useEffect(() => { getWeather() }, ['city'])

  const drawList = () => {
    return Weather.map((day, i) => <WeatherCard key={uuidv4()} weather={day.weather[0].description} date={day.dt_txt} />)
  }

  return <div className="weatherList">{drawList()}</div>;
};

export default WeatherList;