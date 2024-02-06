const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json());
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (request, response) => {
    console.log(persons);
  response.json(persons)
})

app.get('/api/info', (request, response) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
    const countPersons = persons.length;
    const body =`<h1>Phonebook has info for ${countPersons} people</h1>
                <H2>${formattedDate}</H2>`;  
  response.send(body)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id == id)
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.filter(p => p.id != id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const person = request.body
    if (!person.name || !person.number) {
        return response.status(400).json({ 
          error: 'The name or number is missing' 
        })
      }
    else if(persons.filter(i => i.name == person.name).length > 0){
        return response.status(400).json({ error: 'name must be unique' })
    }
    const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id)) 
    : 0;
    
    person.id = maxId + 1
    let personAdd = { 
          "id": maxId + 1,
          "name": person.name, 
          "number": person.number
        }
    persons= persons.concat(personAdd)
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})