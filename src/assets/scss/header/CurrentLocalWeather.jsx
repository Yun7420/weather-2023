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
        {todayWeather ? todayWeather.name : "Incheon"} {textWeek}, {dates} {textMonth}
        <h2>
          <span>{todayWeather ? todayWeather.main.temp : "-2.05"}</span> {todayWeather ? todayWeather.weather[0].description : "light snow"}
        </h2>
      </p>
      <img
        src={todayWeather ? process.env.PUBLIC_URL + `/image/weather${todayWeather.weather[0].icon}.svg` : process.env.PUBLIC_URL + "/image/weather13d.svg"}
        alt={todayWeather ? todayWeather.weather[0].icon : "13d"}
      />
    </div>
  );
};

export default CurrentLocalWeather;
