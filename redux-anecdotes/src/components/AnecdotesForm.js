import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { destroyNotification, createNotification } from "../reducers/notificationReducer";
import anecdotesService from "../services/anecdotes";


const AnecdotesForm = () => {
  const dispatch = useDispatch()


  const notify = (msg) => {
    setTimeout(() => {
      dispatch(destroyNotification())
    }, 5000)
    dispatch(createNotification(msg))
  }

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdotesService.createNew(anecdote)
    dispatch(createAnecdote(newAnecdote));
    notify(`you added '${anecdote}' to the list`)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdotesForm