import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [load, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});
  
  
  function showForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast({
      name: response.data.name,
      initials: response.data.sys.country,
      temperature: (Math.round(response.data.main.temp)),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,

    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba753d969dccd2973e89444d00d45191&units=metric`;
    axios.get(apiUrl).then(showForecast);

  }

  function updateCity(event) {
    setCity(event.target.value);
  }


  let form = (    <form className="input-group mb-3" onSubmit={handleSubmit}>
    <input type="Search" className="form-control" id="search-bar" autoComplete="off" onChange={updateCity} />
    <button type="Submit" className="btn btn-outline-info" id="on-click">Search</button>
  </form>);

  if (load) {
    return (
      <div>
        {form}
        <div className="col-6">
          <div className="first-section">
            <div className="card-2">
              <div className="card-body" id="first-card-body">
                <div className="card-title" id="city-name">
                  {forecast.name},{forecast.initials}
                </div>
                <span className="card-title">
                  <span id="temperature">{forecast.temperature}</span>
                  <span className="card-title" id="unit">
                    °C
                  </span>
                </span>
                <p className="card-text" id="time">
                  14:25
                </p>
                <p className="card-text" id="date">
                  14/02/2021
                </p>
                <div className="card-text" id="weather-description"></div>
                <p className="today" id="day">
                  Saturday
                </p>
                <p className="today" id="humidity">
                Humidity: {forecast.humidity}%
                </p>
                <p className="today" id="wind">
                Wind: {forecast.wind}km/h
                </p>
                <div className="first-icon" id="current-weather-icon">
                  <img
                src="https://img.icons8.com/doodle/96/000000/partly-cloudy-night.png"
                    width="110" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (form);

  }

}