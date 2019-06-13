import React from 'react'

const Total = ({parts}) => {
  const numberOfExercises = parts.map(part => part.exercises).reduce((acc, curr) => acc + curr)

  return <p>Number of exercises {numberOfExercises}</p>
}
export default Total