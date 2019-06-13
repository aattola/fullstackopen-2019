import React from 'react'

const PersonForm = ({
  handlers: {handleNameChange, handleSubmit, handleNumberChange},
  values: {newName, newNumber}
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm