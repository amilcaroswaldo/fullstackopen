import { useState } from 'react'
import ListPerson from './ListPersons';
import FormPersons from './FormPersons';
import FilterPerson from './FilterPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "88887-11" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const findDuplicates = persons.findIndex(person => person.name === newName)
    if (findDuplicates !== -1) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const objName = {
        name: newName, number: newNumber
      }
      setPersons(persons.concat(objName))
    }
  }
  return (
    <div>
      <FilterPerson persons={persons} setPersons={setPersons} />
      <FormPersons addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNumber={setNumber}/>
      <ListPerson persons={persons}/>
    </div>
  )
}

export default App