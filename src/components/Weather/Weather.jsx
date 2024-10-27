import React, { useEffect, useRef, useState } from 'react';
import search_icon from '../../assets/search_icon.png';
import clear from '../../assets/clear.gif';
import cloudi from '../../assets/cloudi.gif';
import cold from '../../assets/cold.gif';
import humidity from '../../assets/humidity.gif';
import rain from '../../assets/rain.gif';
import storm from '../../assets/storm.gif';
import sun from '../../assets/sun.gif';
import wind from '../../assets/wind.gif';

const Weather = () => {
  const inputRef = useRef();
  // ali data store fore weather-api
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    '01d': sun,
    '01n': sun,
    '02d': cloudi,
    '02n': cloudi,
    '03d': cloudi,
    '03n': cloudi,
    '04d': cloudi,
    '04n': cloudi,
    '09d': rain,
    '09n': rain,
    '10d': rain,
    '10n': rain,
    '11d': storm,
    '11n': storm,
    '13d': cold,
    '13n': cold,
    '50d': clear,
    '50n': clear,
  };

  // weather api
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear; //clear means default icon mean clear icon
      setWeatherData({
        humidity: data.main.humidity, // humidity
        windSpeed: data.wind.speed, // wind speed
        temperture: Math.floor(data.main.temp), // temperture
        location: data.name, // location
        icon: icon, // icon
      });
    } catch (error) {}
  };

  // search funtion aii khana city name lakha hoii
  useEffect(() => {
    search('');
  }, []);

  return (
    // <div className="">
    <div className="min-h-screen flex justify-center items-center bg-[#e2d4ff] ">
      <div className="place-self-center p-10 rounded-lg bg-gradient-to-br from-[#ececf5] to-[#4011b6] mt-6 ">
        <p className="text-white text-center">Weather</p>
        <div className="flex justify-center items-center ">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search City"
            className="border p-2 rounded-full"
          />
          <img
            onClick={() => search(inputRef.current.value)}
            className="w-8 h-8 ml-2 p-2 rounded-full bg-white"
            src={search_icon}
            alt="search"
          />
        </div>
        {/* clear Weather gif */}
        <img className="h-28 mx-14" src={weatherData.icon} alt="" />
        <p className="text-white text-center text-6xl ">
          {weatherData.temperture}°C
        </p>
        <p className="text-white text-center text-2xl ">
          {weatherData.location}
        </p>
        <br />
        <hr />
        <br />

        {/* weather condition */}
        <div className="flex gap-28">
          {/* humidity dev */}
          <div>
            {/* humidity gif */}
            <span className="text-white text-1xl ">Humidity</span>
            <img className="h-11 " src={humidity} alt="" />
            <p className="text-white mx-2 ">{weatherData.humidity}%</p>
          </div>

          {/* wind div */}
          <div className="">
            {/* wind gif */}
            <span className="text-white text-1xl ">wind</span>
            <img className="h-11 " src={wind} alt="" />
            <p className="text-white  ">{weatherData.windSpeed}km/h</p>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Weather;
