import React from 'react';
import Person from './Person';

const Filter = ({ persons, filter, handleFilterChange }) => {
  const filterResults = persons.filter((e) =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <div>
        filter shown with
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        {filter.length
          ? filterResults.map((person) => (
              <Person
                key={person.name}
                name={person.name}
                number={person.number}
              />
            ))
          : ' '}
      </div>
    </>
  );
};

export default Filter;
