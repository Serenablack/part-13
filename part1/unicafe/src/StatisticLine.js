const StatisticLine = (props) => {
  return (
    <div>
      <h2>
        {props.text} {props.value} {props.symbol}
      </h2>
    </div>
  );
};
export default StatisticLine;
