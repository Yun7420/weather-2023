import React from "react";

// 컴포넌트
import Title from "../../assets/scss/header/Title";
import CurrentLocalWeather from "../../assets/scss/header/CurrentLocalWeather";

const Header = () => {
  return (
    <header id="Header">
      <Title />
      <CurrentLocalWeather />
    </header>
  );
};

export default Header;
