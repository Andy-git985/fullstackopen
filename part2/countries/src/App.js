import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [country, setCountry] = useState({});
  const [weather, setWeather] = useState({});
  let location;

  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('promise fulfilled');
      setCountries(response.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log('weather');
  //   location = 'Helsinki';
  //   const api_key = process.env.REACT_APP_API_KEY;
  //   let units = 'imperial';
  //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${api_key}`;
  //   axios.get(url).then((response) => {
  //     console.log('promise fulfilled');
  //     setWeather(response.data);
  //   });
  // });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCountry({});
    setWeather({});
  };

  const handleCountryChange = (country) => {
    setCountry(country);
    console.log(country);
    location = country.capital[0];
    console.log(location);
    const api_key = process.env.REACT_APP_API_KEY;
    let units = 'imperial';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${api_key}`;
    console.log(url);
    axios.get(url).then((response) => {
      console.log('promise fulfilled');
      console.log(response.data);
      setWeather(response.data);
    });
  };

  console.log('render', countries.length, 'countries');

  return (
    <div>
      <Filter
        countries={countries}
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleCountryChange={handleCountryChange}
      />
      <Country country={country} />
    </div>
  );
}

export default App;
