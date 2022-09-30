import React from 'react';

const Weather = ({ weather }) => {
  return (
    <>
      <h2>Weather in {weather.name}</h2>
      <div>temperature {weather.main.temp} fahrenheit</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          style={{ width: '150px' }}
        />
      </div>
    </>
  );
};

export default Weather;
