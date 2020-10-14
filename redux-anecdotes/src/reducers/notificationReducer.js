export const createNotification = (notification, timeToLive) => {
  return async dispatch => {
    var timeoutId = null
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION',
        notification
      })
    }, timeToLive * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
  }
}


const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.notification

  case 'RESET_NOTIFICATION':
    return ''

  default: return state
  }
}

export default notificationReducer