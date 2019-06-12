import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
  
  const nextAnecdote = () => {
    const anecdote = Math.floor(Math.random()*anecdotes.length)
    setSelected(anecdote)
  }

  const voteAnecdote = () => {
    const votesCopy = {...votes}
    votesCopy[selected]++
    setVotes(votesCopy)
  }

  const mostVotes = () => {
    let maxIndex = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      {anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <button onClick={voteAnecdote}>vote anecdote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>

      {anecdotes[mostVotes()]} <br />
      has {votes[mostVotes()]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)