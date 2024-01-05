import React from "react";
import { useState, useContext } from "react";

// Provider 제공
import { CurrentWeatherContext } from "../../../App";

// 차트
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SearchChart = () => {
  const { forecastWeather } = useContext(CurrentWeatherContext);

  const [forecastData, setForecastData] = useState({
    temp: [],
    humidity: [],
    speed: [],
  });

  if(forecastWeather) {
    for(let i=0; i<5; i++) {
      forecastData.temp.push(forecastWeather[i].main.temp)
      forecastData.humidity.push(forecastWeather[i].main.humidity)
      forecastData.speed.push(forecastWeather[i].wind.speed)
    }
  }

  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "온도",
        data: forecastData.temp,
        borderColor: "#FFE993",
        backgroundColor: "#FFE993",
      },
      {
        label: "습도",
        data: forecastData.humidity,
        borderColor: "#B8DAFF",
        backgroundColor: "#B8DAFF",
      },
      {
        label: "풍속",
        data: forecastData.speed,
        borderColor: "#B5B1FF",
        backgroundColor: "#B5B1FF",
      },
    ],
  };

  // 차트 옵션
  const chartOptions = {
    // line 타입의 경우 중간에 누락된 데이터가 있을 경우 이어그릴지 여부 설정
    spanGaps: true,
    // 호버 툴팁이 설정
    // 아래와 같이 index를 기준으로 설정하게 되면 동일한 index에 놓인 값들이 모두 표시
    interaction: {
      mode: "index",
    },
    plugins: {
      // 범례 스타일링
      legend: {
        labels: {
          // false일 경우 직사각형 표시
          usePointStyle: true,
        },
      },
      // 툴팁 스타일링
      tooltip: {
        backgroundColor: "#000000",
        padding: 20,
        bodySpacing: 20,
      },
    },
    // 그리드 스타일링
    scales: {
      x: {
        grid: {
          color: "#ffffff",
        },
      },
      y: {
        grid: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="searchChart">
      <h2>한눈에 보는 차트</h2>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default SearchChart;
