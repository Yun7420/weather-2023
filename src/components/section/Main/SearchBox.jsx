import React from "react";
import { useState } from "react";
// React-Redux
import { useDispatch, useSelector } from "react-redux";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const liveSearchList = ["Afghanistan", "Algeria", "Angola", "Bangladesh", "Belarus", "Belgium", "Cambodia", "Cameroon", "Canada", "Denmark", "Ecuador", "Egypt", "Germany", "Holland", "India", "Jordan", "Kenya", "Libya", "Mexico", "New Zealand", "Panama", "Russia", "Syria", "Uruguay", "Vietnam", "Wales", "Zambia"]; 

const SearchBox = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading.loading);
  const todayWeather = useSelector((state) => state.weather.todayWeather);

  // 도시 이름 입력값
  const [searchCity, setSearchCity] = useState("");

  const citySubmitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "SEARCH_CITY", payload: { searchCity } });
    setSearchCity("");
    setLiveSearch(false);
  };

  // 라이브 서치
  const [liveSearch, setLiveSearch] = useState(false);

  const filterLiveSearchList = liveSearchList.filter((city) => {
    return city.toLowerCase().includes(searchCity.toLowerCase());
  });

  if (loading) {
    return (
      <div className="searchBox">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" className="searchbox" />
      </div>
    );
  }

  return (
    <div className="searchBox">
      <h2>현재 {todayWeather ? todayWeather.name : "Incheon"}의 날씨는?</h2>
      <form onSubmit={citySubmitHandler} className="searchbox">
        <input
          type="search"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onFocus={() => setLiveSearch(true)}
          onBlur={() => setLiveSearch(false)}
          placeholder="원하는 도시를 영어로 검색하세요"
        />
        <ul className={liveSearch ? "live_search_box on" : "live_search_box"}>
          {filterLiveSearchList.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchBox;
