import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { destroyNotification, createNotification } from "../reducers/notificationReducer";

const AnecdotesList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter ?
      anecdotes.filter(({ content }) => content.includes(filter)) :
      anecdotes.sort((a, b) => b.votes - a.votes);
  })


  const notify = (msg) => {
    setTimeout(() => {
      dispatch(destroyNotification())
    }, 5000)
    dispatch(createNotification(msg))
  }

  const vote = (id, content) => {
    dispatch(upvoteAnecdote(id));
    notify(`you up-voted '${content}'`)
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id} className="anecdote">
          <p style={{ margin: 0 }}>{anecdote.content}</p>
            has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      ))}
    </div>
  )
}

export default AnecdotesList