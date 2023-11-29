import React from "react";
import { useState } from 'react'
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

const Main = () => {

    const [City, setCity] = useState('Madrid')

    const handleSubmit = (e) => {

        e.preventDefault();

        let campo = e.target.city.value

        if (campo ==  '') 
          campo = 'Madrid'

        setCity(campo)

        // clear imput
        e.target.city.value = ''

    }

  return (<>
    <WeatherForm handleSubmit={handleSubmit}/>
    <br />
    <WeatherList city={City}/>
    </>)
};

export default Main;
