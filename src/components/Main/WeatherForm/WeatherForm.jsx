import React from "react";

const WeatherForm = ({handleSubmit}) => {

  return (
    <>
      <h1>Busca Ciudad</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='city'>Nombre de la Ciudad :  </label>
        <input type="text" name="city" id="city" placeholder='Madrid' />
        <br/>
        <br/>
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default WeatherForm;
