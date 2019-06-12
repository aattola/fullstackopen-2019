import React from 'react'

const Statistics = ({statistics: {good, neutral, bad}}) => {
  const all = good + neutral + bad
  return (
    <>
      <h1>statistics</h1>

      <h4>good {good}</h4>
      <h4>neutral {neutral}</h4>
      <h4>bad {bad}</h4>
      <h4>all {all}</h4>
      <h4>average {all / 3}</h4>
      <h4>positive { good / all * 100}%</h4>
    </>
  )
}

export default Statistics