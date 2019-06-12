import React from 'react'

const Content = ({parts}) => {
  const PartsList = parts.map(part => (
    <p key={part.name}>{part.name} {part.exercises}</p>
  ))

  return PartsList
}

export default Content