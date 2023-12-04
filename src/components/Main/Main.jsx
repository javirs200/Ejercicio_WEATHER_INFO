import React from "react";
import { useState, useEffect } from 'react'
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";
import axios from "axios";

const Main = () => {

  const [city, setCity] = useState('Madrid')
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState('Madrid')

  const handleSubmit = (e) => {
    e.preventDefault();

    let campo = e.target.city.value
    if (campo == '')
      campo = 'Madrid'
    // console.log('submit ciudad:', campo);
    //getWeather(campo)
    setCity(campo)
    // clear imput
    e.target.city.value = ''
  }

  const getWeather = async () => {
    // console.log('getweater llamado con ciudad' , city);
    try {
      const api_key = import.meta.env.VITE_API_KEY
      //get coordinates from the city
      const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`);
      const data = res.data
      if (data) {
        // console.log(data,data.length);
        if (data.length > 0) {
          const lat = data[0].lat
          const lon = data[0].lon
          // console.log('nombre:', data[0].name, ' latitud:', data[0].lat, ' logitud', data[0].lon);
          //&cnt=1
          const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&cnt=10&units=metric&lang=es`);
          const data2 = res2.data
          // console.log('weather data : ',data2);
          setWeather(data2.list)
          setCityName(data[0].name)
        }
      }

    } catch (error) {
      console.log('error llamada api -> ', error);
    }
  };

  useEffect(() => {
    // console.log('cambia la ciudad');
    getWeather();
    // console.log('get weather termino');
  },[city])

  return (<>
    <WeatherForm handleSubmit={handleSubmit} />
    <br />
    <WeatherList weather={weather} cityName={cityName} />
  </>)
};

export default Main;
