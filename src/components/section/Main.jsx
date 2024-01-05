import React from "react";

// 컴포넌트
import SearchBox from "../../assets/scss/main/SearchBox";
import SearchInfo from "../../assets/scss/main/SearchInfo";
import SearchChart from "../../assets/scss/main/SearchChart";
import ForecastWeather from "../../assets/scss/main/ForecastWeather";

const Main = () => {
  return (
    <div id="Main">
      <SearchBox />
      <SearchInfo />
      <SearchChart />
      <ForecastWeather />
    </div>
  );
};

export default Main;
