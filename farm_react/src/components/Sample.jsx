import React, { useState, useEffect } from "react";

function Sample() {
    const [weather, setWeather] = useState(null);
    // const [cityName, setCity] = useState('chennai');

    useEffect(() => {
        fetch("https://goweather.herokuapp.com/weather/Chennai")
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weather ? (
                <div className="container">
                    {/* <h3>City: {weather.city}, {weather.country}</h3> */}
                    <h3>Temperature: {weather.temperature}</h3>
                    {/* <h3>Humidity: {weather.forecast[1].wind}%</h3> */}
                    <h3>Wind Speed: {weather.forecast[1].wind} m/s</h3>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Sample;
