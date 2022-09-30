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

  const handleAddPerson = (event) => {
    event.preventDefault();
    const person = persons.find((e) => e.name === newName);
    if (person && person.number !== newNumber) {
      if (
        window.confirm(
          `${newName} is already added to phone book, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...person, number: newNumber };
        updatePerson(person.id, updatedPerson);
      }
    } else if (persons && person.number === newNumber) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      addPerson(personObject);
    }
  };

  const addPerson = (newObject) => {
    personService.create(newObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
    });
  };

  const updatePerson = (id, updatedPerson) => {
    personService
      .update(id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map((p) => (p.id !== id ? p : returnedPerson)));
      })
      .catch((error) => {
        alert(error);
      });
  };

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

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleFilterChange = (event) => setFilter(event.target.value);

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
        handleAddPerson={handleAddPerson}
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
