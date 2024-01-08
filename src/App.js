import React from "react";
import { useState, useEffect, createContext } from "react";

// 컴포넌트
import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";

// Npm
import ClipLoader from "react-spinners/ClipLoader";

// Provider 제공
export const CurrentWeatherContext = createContext();

const App = () => {
  // 로딩 state
  const [loading, setLoading] = useState(false);

  // 날씨 state
  const [todayWeather, setTodayWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  // 도시 state
  const [city, setCity] = useState(null);

  // Api Error
  const [apiError, setApiError] = useState(null);

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
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setTodayWeather(data);
      setLoading(false);
    } catch (error) {
      setApiError(error);
      setLoading(false);
    }
  };

  // 현재위치 기반 5일치 예보 API 호출
  const getForecastByCurrentLocation = async (latitude, longitude) => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      setForecastWeather(data.list);
      setLoading(false);
    } catch (error) {
      setApiError(error);
      setLoading(false);
    }
  };

  // 도시이름 기반 Api 호출
  const getWeatherByCity = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      if(response.status !== 200 || response.ok === false) {
        throw new Error("error")
      }

      setTodayWeather(data);
      setLoading(false);
    } catch (error) {
      setApiError(error);
      setLoading(false);
    }
  };

  // 도시이름 기반 5일치 예보 API 호출
  const getForecastByCity = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      if(response.status !== 200 || response.ok === false) {
        throw new Error("error")
      }

      setForecastWeather(data.list);
      setLoading(false);
    } catch (error) {
      setApiError(error);
      setLoading(false);
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
  const currentWeather = {
    todayWeather,
    setTodayWeather,
    city,
    setCity,
    forecastWeather,
  };
  
  return (
    <div className="App">
      <div className="AppCover">
        <CurrentWeatherContext.Provider value={currentWeather}>
          {loading ? (
            <div className="loading">
              <ClipLoader color="#ffffff" loading={loading} size={100} />
            </div>
          ) : apiError ? (
            <div className="errorBox">
              <div className="errorInfo">
                <div>죄송합니다. <br /> 도시이름을 찾을 수 없습니다.</div>
                <button onClick={() => window.location.reload()}>GO HOME</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="Wrapper">
                <Header />
                <Main />
              </div>
              <Footer />
            </div>
          )}
        </CurrentWeatherContext.Provider>
      </div>
    </div>
  );
};

export default App;
