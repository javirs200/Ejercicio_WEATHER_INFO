import React, { useEffect } from "react";
import './WeatherCard.css'

const WeatherCard = ({ weather , date ,icon }) => {

  
  let [dia,hora] = date.split(' ')
  hora = hora.slice(0,hora.length-3)
  //console.log('dia->',dia,' hora->',hora);
  
  return (
    <div className="weatherCard">
      <h2>{dia}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`}/>
      <h3>{weather}</h3>
      <h3>{hora}</h3>
    </div>
  );
};

export default WeatherCard;
