const FilterPerson = ({persons, setPersons}) => {
    const handleFilterPersons = event => {
        const name = event.target.value
        const lower = String(name).toLowerCase();
        const filterPerson = persons.filter(person => {
          const nameList = person.name.toString().toLowerCase()
          return nameList.includes(lower)
        })
        if (filterPerson.length > 0) setPersons(filterPerson)
      }
    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with: <input onChange={handleFilterPersons} />
            <br />
        </div>
    )
}
//the component was separate from the beggining of exercise
export default FilterPerson