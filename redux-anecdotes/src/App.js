import React from 'react'
import './app.css'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'

const App = () => {
  return (
    <div style={{ padding: '1em' }}>
      <h2>Anecdotes</h2>
      <AnecdotesForm />
      <AnecdotesList />
    </div>
  )
}

export default App