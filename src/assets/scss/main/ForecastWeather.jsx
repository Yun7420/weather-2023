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
              src={forecastWeather ? process.env.PUBLIC_URL + `/image/weather${forecastWeather && forecastWeather[0].weather[0].icon}.svg` : process.env.PUBLIC_URL + `/image/weather13d.svg`}
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather ? forecastWeather[0].main.temp : -1.06}
            도, 습도 {forecastWeather ? forecastWeather[0].main.humidity : 64}%,
            풍속 {forecastWeather ? forecastWeather[0].wind.speed : 2.54}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather ? forecastWeather[0].weather[0].main : "Snow"}</b>
        </li>
        <li>
          <div>
            <p>{dates + 2}일 예보</p>
            <img
              src={forecastWeather ? process.env.PUBLIC_URL + `/image/weather${forecastWeather[1].weather[0].icon}.svg` : process.env.PUBLIC_URL + `/image/weather13d.svg`}
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather ? forecastWeather[1].main.temp : -0.64}
            도, 습도 {forecastWeather ? forecastWeather[1].main.humidity : 69}%,
            풍속 {forecastWeather ? forecastWeather[1].wind.speed : 2.67}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather ? forecastWeather[1].weather[0].main : "Snow"}</b>
        </li>
        <li>
          <div>
            <p>{dates + 3}일 예보</p>
            <img
              src={forecastWeather ? process.env.PUBLIC_URL + `/image/weather${forecastWeather[2].weather[0].icon}.svg` : process.env.PUBLIC_URL + `/image/weather13d.svg`}
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather ? forecastWeather[2].main.temp : -0.19}
            도, 습도 {forecastWeather ? forecastWeather[2].main.humidity : 78}%,
            풍속 {forecastWeather ? forecastWeather[2].wind.speed : 4.57}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather ? forecastWeather[2].weather[0].main : "Snow"}</b>
        </li>
        <li>
          <div>
            <p>{dates + 4}일 예보</p>
            <img
              src={forecastWeather ? process.env.PUBLIC_URL + `/image/weather${forecastWeather[3].weather[0].icon}.svg` : process.env.PUBLIC_URL + `/image/weather10d.svg`}
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather ? forecastWeather[3].main.temp : 0.56}
            도, 습도 {forecastWeather ? forecastWeather[3].main.humidity : 96}%,
            풍속 {forecastWeather ? forecastWeather[3].wind.speed : 3.02}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather ? forecastWeather[3].weather[0].main : "Rain"}</b>
        </li>
        <li>
          <div>
            <p>{dates + 5}일 예보</p>
            <img
              src={forecastWeather ? process.env.PUBLIC_URL + `/image/weather${forecastWeather[4].weather[0].icon}.svg` : process.env.PUBLIC_URL + `/image/weather10d.svg`}
              alt="날씨 이미지"
            />
          </div>
          <p>
            날씨 예상으로 온도 {forecastWeather ? forecastWeather[4].main.temp : 1.15}
            도, 습도 {forecastWeather ? forecastWeather[4].main.humidity : 97}%,
            풍속 {forecastWeather ? forecastWeather[4].wind.speed : 2.41}ms 기상청에서
            예상하고 있습니다.
          </p>
          <b>{forecastWeather ? forecastWeather[4].weather[0].main : "Rain"}</b>
        </li>
      </ul>
    </div>
  );
};

export default ForecastWeather;
