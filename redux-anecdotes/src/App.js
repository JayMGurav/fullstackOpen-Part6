import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './app.css'

import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdotesService from './services/anecdotes'
import { initializeAnecdotes } from '../src/reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesService.getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  }, [])// eslint-disable-line react-hooks/exhaustive-deps 

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