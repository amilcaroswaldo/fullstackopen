import { useState } from "react"

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
const Buttom = ({feedback})  => {
  return (
    <div>
    {
      feedback.map(btn => <button key={btn.title} onClick={btn.handleClick} > {btn.title} </button>)
    }
    </div>
  )
}

const Paragraph = ({feedback})  => {
  return (
    <div>
    {
      feedback.map(item => <p key={item.title} > {item.title} {item.value} </p>)
    }
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 // console.log(good);
  const feedback = [
    {
      title: 'good',
      handleClick: ()=> setGood(good +1)
    },
    {
      title: 'neutral',
      handleClick: ()=> setNeutral(neutral +1)
    },
    {
      title: 'bad',
      handleClick: ()=> setBad(bad +1)
    }
  ];
  const setFeedback = [
    {
      title: 'good',
      value: good
    },
    {
      title: 'neutral',
      value: neutral
    },
    {
      title: 'bad',
      value: bad
    }
  ];
  return (
    <div>
      <Header title='give feedback'/>
      <Buttom feedback={feedback} />
      <Header title='statistics'/>
      <Paragraph feedback={setFeedback} />
    </div>
  )
}

export default App
