const Notification = ({ message, value }) => {
  console.log(value);
  let notificationstyle = {
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: "3px",
  };

  if (value === 1) {
    notificationstyle = {
      ...notificationstyle,
      color: "green",
      border: "solid 3px green",
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
