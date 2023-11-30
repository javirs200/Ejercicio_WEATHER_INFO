import React, { useEffect } from "react";
import './WeatherCard.css'

const WeatherCard = ({ weather , date }) => {

  
  let [dia,hora] = date.split(' ')
  hora = hora.slice(0,hora.length-3)
  //console.log('dia->',dia,' hora->',hora);
  

  return (
    <div className="weatherCard">
      <h2>{dia}</h2>
      <h3>{weather}</h3>
      <h3>{hora}</h3>
    </div>
  );
};

export default WeatherCard;
