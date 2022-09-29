import React from 'react';

const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((l) => {
          return <li>{l}</li>;
        })}
      </ul>
      <div>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          style={{ width: '150px' }}
        />
      </div>
    </>
  );
};

export default Country;
