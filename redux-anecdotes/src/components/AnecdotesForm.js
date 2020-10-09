import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from "../reducers/notificationReducer";



const AnecdotesForm = (props) => {
  // const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(anecdote);
    props.createNotification(`you added '${anecdote}' to the list`, 5);
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}


const mapDispatchToProps = {
  createAnecdote,
  createNotification
}

const connectedAnecdotesForm = connect(null, mapDispatchToProps)(AnecdotesForm)
export default connectedAnecdotesForm;