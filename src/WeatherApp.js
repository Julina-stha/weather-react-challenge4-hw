import React from "react";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import "./styles.css";

export default function WeatherApp() {
  return (
    <div className="App">
      <img src="src/Images/Summer.png" id="weather-background" alt="" />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchForm defaultCity="Kathmandu" />
          </div>
          <div className="row">
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

