import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "88887-11" }
  ])
  let auxPerson;
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
  const handleNameChange = (event) => {
    const sourceName = event.target.value
    setNewName(sourceName)
  }
  const handleNumberChange = (event) => {
    const sourceNumber = event.target.value
    setNumber(sourceNumber)
  }
  const handleFilterPersons = event => {
    const name = event.target.value
    const lower = String(name).toLowerCase();
    const filterPerson = persons.filter(person => {
      const nameList = person.name.toString().toLowerCase()
      return nameList.includes(lower)
    })
    auxPerson = persons
    console.log(name, auxPerson);
    if (filterPerson.length > 0) setPersons(filterPerson)
    if (name === "") setPersons(auxPerson)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={handleFilterPersons} />
      <br />
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button
            type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
          <li key={i}> {person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App