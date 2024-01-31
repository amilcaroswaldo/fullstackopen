const Notification = ({ message }) => {
  const msgStyle = {
    color: 'green',
    background:' lightgrey',
    fontsize: '20px',
    borderstyle: 'solid',
    borderradius: 5,
    padding: 10,
    marginbottom: 10
  }
    if (message === null) {
      return null
    }
  
    return (
      <div style={msgStyle}>
        {message}
      </div>
    )
  }
export default Notification;  