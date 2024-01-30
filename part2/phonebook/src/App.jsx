import { useState } from 'react'
import ListPerson from './ListPersons';
import FormPersons from './FormPersons';
import FilterPerson from './FilterPerson';
import notes from './services/notes';

const App = () => {
  const [persons, setPersons] = useState([
    {}
  ])
  notes.getAll().then(response => setPersons(response))
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
      notes.create(objName).then(response=> console.log(response))
      setPersons(persons.concat(objName))
    }
  }
  const deleteName = event =>{
    event.preventDefault()
    if (window.confirm(`are you sure to delete ${event.target.name}??`)) {
      const id = event.target.id;
      const arrDelete = persons.filter(p => p.id !== id)
      notes.Delete(id).then(res => console.log(res))
    }
  }
  return (
    <div>
      <FilterPerson persons={persons} setPersons={setPersons} />
      <FormPersons addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNumber={setNumber} />
      <ListPerson persons={persons} handleDelete={deleteName} />
    </div>
  )
}

export default App