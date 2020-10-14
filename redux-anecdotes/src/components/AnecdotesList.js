import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
  // const dispatch = useDispatch()
  // const anecdotes = useSelector(({ anecdotes, filter }) => {
  //   return filter ?
  //     anecdotes.filter(({ content }) => content.includes(filter)) :
  //     anecdotes.sort((a, b) => b.votes - a.votes);
  // })

  // const anecdotesToShow = () => {
  //   if (props.filter) {
  //     return props.anecdotes.filter(({ content }) => content.includes(filter))
  //   }
  //   return props.anecdotes.sort((a, b) => b.votes - a.votes);
  // }

  const vote = (id, content) => {
    // dispatch(upvoteAnecdote(id));
    // dispatch(createNotification(`you up-voted '${content}'`, 5))
    props.upvoteAnecdote(id)
    props.createNotification(`you up-voted '${content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote => (
        <div key={anecdote.id} className="anecdote">
          <p style={{ margin: 0 }}>{anecdote.content}</p>
            has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.filter) {
    return {
      anecdotes: state.anecdotes.filter(({ content }) => content.includes(state.filter))
    }
  }
  return {
    anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
  }
}

const mapDispatchToProps = {
  createNotification,
  upvoteAnecdote
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList)
export default ConnectedAnecdotes
// export default AnecdotesList