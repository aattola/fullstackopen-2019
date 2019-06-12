import React from 'react'

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({statistics: {good, neutral, bad}}) => {
  const all = good + neutral + bad

  if (all <= 0) return <h4>No feedback given</h4>

  return (
    <>
      <h1>statistics</h1>

      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={all / 3} />
          <Statistic text='positive' value={good / all * 100 + ' %'} />
        </tbody>
      </table> 
    </>
  )
}

export default Statistics