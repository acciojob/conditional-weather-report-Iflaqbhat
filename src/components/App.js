import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    conditions: "",
  });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <WeatherDisplay
        temperature={weather.temperature}
        conditions={weather.conditions}
      />
    </div>
  );
};

export default App;
