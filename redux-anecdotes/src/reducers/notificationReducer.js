export const createNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const destroyNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}


const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification;

    case 'RESET_NOTIFICATION':
      return '';

    default: return state;
  }
}

export default notificationReducer;