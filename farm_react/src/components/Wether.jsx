// import React, { useState, useEffect } from "react";

// function WeatherApp() {
//     const [city, setCity] = useState("");
//     const [weather, setWeather] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const fetchWeather = (cityName) => {
//         setLoading(true);
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e84a288e198f7230f2aC8f13bbd9e7eb&units=metric`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setWeather(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchWeather(city);
//     }, []);

//     return (
//         <div className="weatherApp">
//             <h1>Weather Forecast</h1>
//             <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="Enter city name"
//             />
//             <button onClick={() => fetchWeather(city)}>Get Weather</button>

//             {loading ? (
//                 <p>Loading weather data...</p>
//             ) : weather ? (
//                 <div className="container">
//                     <h3>City: {weather.name}, {weather.sys?.country}</h3>
//                     <h3>Temperature: {weather.main?.temp}°C</h3>
//                     <h3>Humidity: {weather.main?.humidity}%</h3>
//                     <h3>Wind Speed: {weather.wind?.speed} m/s</h3>
//                 </div>
//             ) : (
//                 <p>City not found. Try again.</p>
//             )}
//         </div>
//     );
// }

// export default WeatherApp;





import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = (cityName) => {
    setLoading(true);
    setError("");

    fetch(
      `https://jsonplaceholder.typicode.com/users`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("user not found!");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setWeather(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="weatherApp">
      <h1>Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="container">
          <h3>
            City: {weather.name}, {weather.sys?.country}
          </h3>
          <h3>Temperature: {weather.main?.temp}°C</h3>
          <h3>Humidity: {weather.main?.humidity}%</h3>
          <h3>Wind Speed: {weather.wind?.speed} m/s</h3>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
