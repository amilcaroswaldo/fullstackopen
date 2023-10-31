import { useState } from 'react'

const Buttom = ({ handleClick, title }) => {
  return (<button onClick={handleClick}>{title}</button>);
}
const Paragraph = ({ text }) => <p>{text}</p>

const H1 = ({ text }) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  const [anecdote, setAnecdote] = useState('');
  const randomNumber = () => {
    const ln = anecdotes.length - 1;
    const index = Math.floor(Math.random() * ln) + 1;
    setSelected(index);
  }
  const voteMethod = () => {
    const copyVote = [...vote];
    copyVote[selected] += 1;
    setVote(copyVote);
    const hignVote= Math.max(...copyVote);
    const lInde = copyVote.indexOf(hignVote);
    console.log(anecdotes[lInde]);
    setAnecdote(anecdotes[lInde])
  }
  return (
    <div>
      <H1 text={'anecdote of the day'} />
      <Paragraph text={anecdotes[selected]} />
      <Paragraph text={`has ${vote[selected]} votes`} />
      <br />
      <Buttom handleClick={randomNumber} title={'next anecdote'} />
      <Buttom handleClick={voteMethod} title={'vote'} />
      <H1 text={'anecdote with most votes'} />
      <Paragraph text={anecdote} />
    </div>
  )
}

export default App