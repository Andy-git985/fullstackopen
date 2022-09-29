import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('promise fulfilled');
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => setFilter(event.target.value);

  console.log('render', countries.length, 'countries');

  return (
    <div>
      <Filter
        countries={countries}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
