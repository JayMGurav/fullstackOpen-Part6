import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  // const notification = useSelector(({ notification }) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    margin: '10px 0',
    borderWidth: 1
  }

  return props.notification !== '' ? (
    <div style={style}>
      {props.notification}
    </div>
  ) : null
}

const mapStateToprops = ({ notification }) => {
  return { notification }
}
const connectedNotification = connect(mapStateToprops, null)(Notification)
export default connectedNotification