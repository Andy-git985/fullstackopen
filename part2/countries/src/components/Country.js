import React from 'react';

const Country = ({ country }) => {
  return (
    <>
      {Object.keys(country).length !== 0 ? (
        <>
          <h1>{country.name.common}</h1>
          <div>capital {country.capital[0]}</div>
          <div>area {country.area}</div>
          <h3>languages:</h3>
          <ul>
            {Object.entries(country.languages).map((l) => {
              return <li key={l[0]}>{l[1]}</li>;
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
      ) : (
        ''
      )}
    </>
  );
};

export default Country;
