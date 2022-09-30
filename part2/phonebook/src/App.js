import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import Filter from './components/Filter';
import personService from './services/person';
import person from './services/person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  console.log('render', persons.length, 'persons');

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((e) => e.name).includes(newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleFilterChange = (event) => setFilter(event.target.value);

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      const changedObject = persons.filter((p) => p.id !== id);
      personService
        .remove(id)
        .then((status) => {
          if (status === 200) {
            setPersons(changedObject);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            handleClick={() => removePerson(person.id)}
          />
        );
      })}
    </div>
  );
};

export default App;
