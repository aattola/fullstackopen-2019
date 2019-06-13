import React from 'react'

const PersonForm = ({
  handlers: {handleSearchChange},
  values: {searchValue}
}) => (
  <input value={searchValue} onChange={handleSearchChange} />
)

export default PersonForm