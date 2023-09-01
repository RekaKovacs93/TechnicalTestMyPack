import "./Trip.css";

import { getTrip, updateTrip } from "../../api/trip";
import { useEffect, useState } from "react";

import { PiSun, PiCloudRain } from "react-icons/pi";

function Trip(props) {

  const [trip, setTrip] = useState({
    weatherConditions: "",
  });

  const fetchTrip = async () => {
    const trip = await getTrip();
    setTrip(trip);
  };

  const onClickWeather = async (weather) => {
    const updatedTrip = await updateTrip({
      ...trip,
      weatherConditions: weather,
    });
    setTrip(updatedTrip);
    props.handleWeatherUpdate(updatedTrip.weatherConditions)
  };

  useEffect(() => {
    fetchTrip();
  }, []);

  return (
    <div className="trip">
      <div>
        <h3>
          Your <span>{trip.title}</span> Trip to <span>{trip.destination}</span>
        </h3>
      </div>
      <div className="weather">
        <p>Weather: </p>
        <button
          disabled={trip.weatherConditions === "hot"}
          onClick={() => onClickWeather("hot")}
        >
          <PiSun />
        </button>
        <button
          disabled={trip.weatherConditions === "cold"}
          onClick={() => onClickWeather("cold")}
        >
          <PiCloudRain />
        </button>
      </div>
    </div>
  );
}

export default Trip;
