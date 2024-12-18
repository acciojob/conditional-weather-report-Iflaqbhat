import React from "react";

const WeatherDisplay = (props) => {
  const tempStyle =
    props.temperature >= 20 ? { color: "red" } : { color: "blue" };
  return (
    <div>
      <p style={tempStyle}>{props.temperature}</p>
      <p>{props.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
