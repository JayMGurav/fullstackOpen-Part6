import React from 'react'
import './app.css'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div style={{ padding: '1em' }}>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesForm />
      <AnecdotesList />
    </div>
  )
}

export default App