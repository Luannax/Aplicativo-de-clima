import React, { useState, useEffect } from "react";
import axios from "axios";
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=fbcf515e4906285ab961ef8c5b5282f6`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container-oficial">
      <div className="container">
        <h1>Aplicativo de Clima</h1>
        <input type="text" value={city} onChange={handleCityChange} placeholder="Digite a cidade e aperte Enter" />
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p className="temperatura">Temperatura: {Math.round(weatherData.main.temp).toString().substring(0, 2)}°C</p>
            <p className="descricao">Descrição: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
      <div className="footer">
        <a href="https://github.com/Luannax" target="_blank" rel="noopener noreferrer">Feito por Luanna</a>
      </div>
    </div>
  );
};

export default WeatherApp;
