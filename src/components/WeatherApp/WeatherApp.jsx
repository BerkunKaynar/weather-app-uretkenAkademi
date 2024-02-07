import React, { useState } from "react";
import "./weatherapp.css";
import searchIC from "../assets/search.png";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import wind from "../assets/wind.png";
import snow from "../assets/snow.png";
import humi from "../assets/humi.png";
import driz from "../assets/drizzle.png";

export const WeatherApp = () => {
  const key = "c71a82ef1b2a45c8077428bf7dab1c9c";

  const [wicon, SetWicon] = useState(cloud);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value == "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidi = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temprature = document.getElementsByClassName("weather-temp");
    const city = document.getElementsByClassName("weather-location");

    humidi[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/s";
    temprature[0].innerHTML = data.main.temp + "°c";
    city[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      SetWicon(sun);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      SetWicon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      SetWicon(driz);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      SetWicon(driz);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      SetWicon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      SetWicon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      SetWicon(snow);
    } else {
      SetWicon(sun);
    }
  };
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Şehir Ara..." />
          <div className="search-icon">
            <img
              src={searchIC}
              className="searchIcon"
              onClick={() => {
                search();
              }}
              alt="search"
            />
          </div>
        </div>
        <div className="weather-image">
          <img src={wicon} className="weatherIMG" alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">Londra</div>
        <div className="data-container">
          <div className="element">
            <img src={humi} className="icon" alt="" />
            <div className="data">
              <div className="humidity">64%</div>
              <div className="text">Nem</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} className="icon" alt="" />
            <div className="data">
              <div className="wind">18 km/s</div>
              <div className="text">Rüzgar Hızı</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
