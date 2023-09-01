import "./App.css";

import {useState} from "react";

import Header from "./components/header/Header";
import Trip from "./components/trip/Trip";
import Items from "./components/items/Items";

function App() {

  const [currentWeather, setCurrentWeather] = useState("");

  const handleWeatherUpdate = (weather) => {
    setCurrentWeather(weather);
  };

  return (
    <div className="App">
      <Header />
      <Trip handleWeatherUpdate={handleWeatherUpdate}/>
      <Items currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
