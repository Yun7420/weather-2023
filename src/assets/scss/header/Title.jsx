import React from "react";

// 시간 데이터
import { hours, minutes, amPm } from "../../../data/time";

const Title = () => {
  return (
    <div className="title">
      <div>
        <h1>Weather Dashboard</h1>
        날씨 공공데이터를 제공받아 <b>위치 및 도시이름 기반으로</b> 원하는
        장소의 날씨를 랜더링합니다.
      </div>
      <h2>
        {hours} : {minutes}{amPm}
      </h2>
    </div>
  );
};

export default Title;
