import React from 'react';

const Person = ({ name, number, handleClick }) => (
  <div>
    <span>
      {name} {number}
    </span>
    <button onClick={handleClick}>delete</button>
  </div>
);

export default Person;
