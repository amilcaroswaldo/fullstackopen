const FormPersons = ({addName, newName, setNewName,newNumber, setNumber}) => {

    const handleNameChange = (event) => {
        const sourceName = event.target.value
        setNewName(sourceName)
      }
      const handleNumberChange = (event) => {
        const sourceNumber = event.target.value
        setNumber(sourceNumber)
      }
    return (
        <div>
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
        </div>
    )
}
//the component was separate from the beggining of exercise
export default FormPersons