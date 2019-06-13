import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setNewSearch ] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      const data = await axios.get('http://localhost:3001/persons')
      setPersons(data.data)
    }

    fetchPersons()
  }, [])

  const personsToShow = searchValue === ''
    ? persons
    : persons.filter(person => person.name.includes(searchValue))

  const handleSubmit = (e) => {
    e.preventDefault()

    const personsCopy = [...persons]
    const results = personsCopy.find(elem => elem.name === newName)
    if (results) return alert(`${newName} is already added to phonebook`)
    personsCopy.push({
      name: newName,
      number: newNumber
    })
    setPersons(personsCopy)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handlers={{handleSearchChange}} values={{searchValue}} />
      <h2>add a new</h2>
      <PersonForm values={{newName, newNumber}} handlers={{handleNameChange, handleNumberChange, handleSubmit}} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )

}

export default App