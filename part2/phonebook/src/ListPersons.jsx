const ListPerson = ({persons, handleDelete}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, i) =>
                    <li key={i}> {person.name} {person.number} <button id={person.id} name={person.name} onClick={handleDelete}>delete</button></li>
                )}
            </ul>
        </div>
    )
}
//the component was separate from the beggining of exercise
export default ListPerson