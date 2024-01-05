import React from "react";
import { useState, useEffect, createContext } from "react";

// 컴포넌트
import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";

// Provider 제공
export const CurrentWeatherContext = createContext();

const App = () => {
  // 날씨 state
  const [todayWeather, setTodayWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  // 도시 state
  const [city, setCity] = useState(null);

  // 현재위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;

      getWeatherByCurrentLocation(latitude, longitude);
      getForecastByCurrentLocation(latitude, longitude);
    });
  };

  // 현재위치 기반 API 호출
  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setTodayWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 현재위치 기반 5일치 예보 API 호출
  const getForecastByCurrentLocation = async (latitude, longitude) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setForecastWeather(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  // 도시이름 기반 Api 호출
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setTodayWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 도시이름 기반 5일치 예보 API 호출
  const getForecastByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setForecastWeather(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
      getForecastByCurrentLocation();
    } else {
      getWeatherByCity();
      getForecastByCity();
    }
  }, [city]);

  // Provider 변수 모음
  const currentWeather = { todayWeather, setTodayWeather, city, setCity, forecastWeather };

  return (
    <div className="App">
      <div className="AppCover">
        <CurrentWeatherContext.Provider value={currentWeather}>
          <div className="Wrapper">
            <Header />
            <Main />
          </div>
          <Footer />
        </CurrentWeatherContext.Provider>
      </div>
    </div>
  );
};

export default App;
