import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { destroyNotification, createNotification } from "../reducers/notificationReducer";

const AnecdotesForm = () => {
  const dispatch = useDispatch()


  const notify = (msg) => {
    setTimeout(() => {
      dispatch(destroyNotification())
    }, 5000)
    dispatch(createNotification(msg))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anecdote));
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