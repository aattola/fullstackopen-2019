import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>

      <h4>good {good}</h4>
      <h4>neutral {neutral}</h4>
      <h4>bad {bad}</h4>
      <h4>all {good+neutral+bad}</h4>
      <h4>average {(good+neutral+bad) / 3}</h4>
      <h4>positive {good / (neutral + bad)}%</h4>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)