import React from "react";

const WeatherDisplay = (props) => {
  const tempStyle =
    props.temperature > 20 ? { color: "red" } : { color: "blue" };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{props.temperature}</span>
      </p>
      <p>Conditions: {props.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
