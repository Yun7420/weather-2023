import React from "react";
import { useContext, useState } from "react";

// Provider 제공
import { CurrentWeatherContext } from "../../../App";

const SearchBox = () => {
  // 도시 이름 입력값
  const [searchCity, setSearchCity] = useState("");

  // Provider 제공
  const { todayWeather, setCity } = useContext(CurrentWeatherContext);

  const citySubmitHandler = (e) => {
    e.preventDefault();

    setCity(searchCity)
    setSearchCity("");
  }

  return (
    <div className="searchBox">
      <h2>현재 {todayWeather && todayWeather.name}의 날씨는?</h2>
      <form onSubmit={citySubmitHandler}>
        <input onChange={(e) => setSearchCity(e.target.value)} value={searchCity} type="search" placeholder="원하는 도시를 영어로 검색하세요"  />
      </form>
      <div className="keyword">
        KeyWord
        <ul>
          <li>Paris</li>
          <li>New York</li>
          <li>Japan</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
