import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const objName = {
      name: newName
    }
    setPersons(persons.concat(objName))
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input  onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button
          type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,i) => 
          <li key={i}> {person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App