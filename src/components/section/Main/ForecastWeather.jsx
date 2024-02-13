import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Data
import { dates } from "../../../data/time";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ForecastWeather = () => {
  const loading = useSelector((state) => state.loading.loading);
  const forecastWeather = useSelector((state) => state.weather.forecastWeather);

  if (loading) {
    return (
      <div className="searchChart">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <ul>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="forecastWeather">
      <h2>날씨 예상</h2>
      <ul>
        {forecastWeather && forecastWeather.slice(0,5).map((forecast, index) => (
          <li key={index}>
            <div>
              <p>{dates + index}일 예보</p>
              <img
                src={
                  forecast 
                  ? process.env.PUBLIC_URL + `/image/weather${forecast.weather[0].icon}.svg` 
                  : process.env.PUBLIC_URL + `/image/weather13d.svg`
                }
                alt="날씨 이미지"
              />
            </div>
            <p>날씨 예상으로 온도 {forecast ? forecast.main.temp : -1.05}도, 습도 {forecast ? forecast.main.humidity : 65}%, 풍속 {forecast ? forecast.wind.speed : 2.5}ms 기상청에서 예상하고 있습니다.</p>
            <b>{forecast ? forecast.weather[0].main : "Snow"}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastWeather;
