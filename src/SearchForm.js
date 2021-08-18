import React, { useState } from "react";
import axios from "axios";
import LocateButton from "./LocateButton";

import "./styles.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecast, setForecast] = useState({ loaded: false});
  
  
  function showForecast(response) {
    console.log(response.data);
    setForecast({
      loaded: true,
      Temperature: response.data.main.temp,

    })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba753d969dccd2973e89444d00d45191&units=metric`;
    axios.get(apiUrl).then(showForecast);

  }

  function updateCity(event) {
    setCity(event.target.value)
  }


  let form = (    <form className="input-group mb-3" onSubmit={handleSubmit}>
    <input type="text" className="form-control" id="search-bar" autoComplete="off" onChange={updateCity} />
    <button type="button" className="btn btn-outline-info" id="on-click">
      Search
    </button>
  </form>);

  if (forecast.loaded) {
    return (
      <div>
        {form}
        <LocateButton />
        <ul>
          <li>{city}</li>
          <li>{forecast.date}</li>
        </ul>
      </div>
    );
  } else {
    return (form);

  }

}
