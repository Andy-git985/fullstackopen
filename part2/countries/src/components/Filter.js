import React from 'react';
import Country from './Country';

const Filter = ({ countries, filter, handleFilterChange }) => {
  const filterResults = countries.filter((e) =>
    e.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <div>
        find countries
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        {!filter.length
          ? ''
          : filterResults.length === 1
          ? filterResults.map((country) => (
              <Country key={country.cca3} country={country} />
            ))
          : filterResults.length < 10
          ? filterResults.map((country) => (
              <div key={country.cca3}>
                <span>{country.name.common}</span>
                <button>show</button>
              </div>
            ))
          : 'Too many matches, specify another filter'}
      </div>
    </>
  );
};

export default Filter;
