import { useState } from 'react'
import ListPerson from './ListPersons';
import FormPersons from './FormPersons';
import FilterPerson from './FilterPerson';
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([
    {}
  ])
  axios.get(baseUrl).then(response => setPersons(response.data))
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
      axios.post(baseUrl, objName).then(response => console.log('exito'))
      setPersons(persons.concat(objName))
    }
  }
  return (
    <div>
      <FilterPerson persons={persons} setPersons={setPersons} />
      <FormPersons addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNumber={setNumber} />
      <ListPerson persons={persons} />
    </div>
  )
}

export default App