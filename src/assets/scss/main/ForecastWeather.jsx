import React from "react";
import { useContext } from "react";

// 시간 데이터
import { dates } from "../../../data/time";

// Provider 제공
import { CurrentWeatherContext } from "../../../App";

const ForecastWeather = () => {
  const { forecastWeather } = useContext(CurrentWeatherContext);

  return (
    <div className="forecastWeather">
      <h2>날씨 예상</h2>
      <ul>
        <li>
          <div>
            <p>{dates + 1}일 예보</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/image/weather${
                  forecastWeather && forecastWeather[0].weather[0].icon
                }.svg`
              }
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather && forecastWeather[0].main.temp}
            도, 습도 {forecastWeather && forecastWeather[0].main.humidity}%,
            풍속 {forecastWeather && forecastWeather[0].wind.speed}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather && forecastWeather[0].weather[0].main}</b>
        </li>
        <li>
          <div>
            <p>{dates + 2}일 예보</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/image/weather${
                  forecastWeather && forecastWeather[1].weather[0].icon
                }.svg`
              }
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather && forecastWeather[1].main.temp}
            도, 습도 {forecastWeather && forecastWeather[1].main.humidity}%,
            풍속 {forecastWeather && forecastWeather[1].wind.speed}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather && forecastWeather[1].weather[0].main}</b>
        </li>
        <li>
          <div>
            <p>{dates + 3}일 예보</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/image/weather${
                  forecastWeather && forecastWeather[2].weather[0].icon
                }.svg`
              }
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather && forecastWeather[2].main.temp}
            도, 습도 {forecastWeather && forecastWeather[2].main.humidity}%,
            풍속 {forecastWeather && forecastWeather[2].wind.speed}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather && forecastWeather[2].weather[0].main}</b>
        </li>
        <li>
          <div>
            <p>{dates + 4}일 예보</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/image/weather${
                  forecastWeather && forecastWeather[3].weather[0].icon
                }.svg`
              }
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather && forecastWeather[3].main.temp}
            도, 습도 {forecastWeather && forecastWeather[3].main.humidity}%,
            풍속 {forecastWeather && forecastWeather[3].wind.speed}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather && forecastWeather[3].weather[0].main}</b>
        </li>
        <li>
          <div>
            <p>{dates + 5}일 예보</p>
            <img
              src={
                process.env.PUBLIC_URL +
                `/image/weather${
                  forecastWeather && forecastWeather[4].weather[0].icon
                }.svg`
              }
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather && forecastWeather[4].main.temp}
            도, 습도 {forecastWeather && forecastWeather[4].main.humidity}%,
            풍속 {forecastWeather && forecastWeather[4].wind.speed}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather && forecastWeather[4].weather[0].main}</b>
        </li>
      </ul>
    </div>
  );
};

export default ForecastWeather;
