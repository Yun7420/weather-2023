import React from "react";
import { useContext } from "react";

// 이미지
import TemperatureIcon from "../../../assets/image/temperatureIcon.svg"
import HumidityIcon from "../../../assets/image/humidityIcon.svg"
import WindIcon from "../../../assets/image/windIcon.svg"

// Provider 제공
import { CurrentWeatherContext } from "../../../App";

const SearchInfo = () => {
  // Provider 제공
  const { todayWeather } = useContext(CurrentWeatherContext);

  return (
    <ul className="searchInfo">
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Incheon"}</h3>
          <p>현재 온도 {todayWeather ? todayWeather.main.temp : -1.06}°C</p>
        </div>
        <div>
          <img src={TemperatureIcon} alt="날씨 이미지 아이콘" />
        </div>
      </li>
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Incheon"}</h3>
          <p>현재 습도 {todayWeather ? todayWeather.main.humidity : 64}%</p>
        </div>
        <div>
          <img src={HumidityIcon} alt="날씨 이미지 아이콘" />
        </div>
      </li>
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Incheon"}</h3>
          <p>현재 풍속 {todayWeather ? todayWeather.wind.deg : 150}m/s</p>
        </div>
        <div>
          <img src={WindIcon} alt="날씨 이미지 아이콘" />
        </div>
      </li>
    </ul>
  );
};

export default SearchInfo;
