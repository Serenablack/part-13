const Notification = ({ message, value }) => {
  let notificationstyle = {
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: "3px",
    backgroundColor: "grey",
  };

  if (value === 1) {
    notificationstyle = {
      ...notificationstyle,
      color: "green",
      border: "solid 3px green",
      backgroundColor: "grey",
    };
  }
  if (message === null) {
    return null;
  }

  return (
    <div style={notificationstyle} className="errorMsg">
      {message}
    </div>
  );
};

export default Notification;
