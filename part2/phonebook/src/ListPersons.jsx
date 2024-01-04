const ListPerson = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, i) =>
                    <li key={i}> {person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}
//the component was separate from the beggining of exercise
export default ListPerson