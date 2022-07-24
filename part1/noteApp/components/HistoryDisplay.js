const HistoryDisplay = ({ history }) => {
  if (history.length > 0) {
    return <h1>The history of click is : {history}</h1>;
  } else return <h1>There is no History yet</h1>;
};
export default HistoryDisplay;
