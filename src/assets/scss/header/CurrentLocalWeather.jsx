import React from "react";
import { useContext } from "react";

// 시간 데이터
import { dates, textMonth, textWeek } from "../../../data/time";
// Provider 제공
import { CurrentWeatherContext } from "../../../App";

const CurrentLocalWeather = () => {
  const { todayWeather } = useContext(CurrentWeatherContext);

  return (
    <div className="currentLocalWeather">
      <p>
        {todayWeather && todayWeather.name} {textWeek}, {dates} {textMonth}
        <h2>
          <span>{todayWeather && todayWeather.main.temp}</span>{" "}
          {todayWeather && todayWeather.weather[0].description}
        </h2>
      </p>
      <img
        src={process.env.PUBLIC_URL + `/image/weather${todayWeather && todayWeather.weather[0].icon}.svg`}
        alt={todayWeather && todayWeather.weather[0].icon}
      />
    </div>
  );
};

export default CurrentLocalWeather;
