import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'

const AnecdotesList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))

  const vote = (id) => {
    dispatch(upvoteAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id} className="anecdote">
          <p style={{ margin: 0 }}>{anecdote.content}</p>
            has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      ))}
    </div>
  )
}

export default AnecdotesList