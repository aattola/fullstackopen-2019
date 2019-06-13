import React from 'react'

const PersonForm = ({persons}) => persons.map(({name, number}) => <div key={name}>{name} {number}</div>)
export default PersonForm