import { useState } from "react";
import Mybutton from "./Mybutton";
import StatisticLine from "./StatisticLine";

const Statistic = (props) => {
  if (props.ifButtonClicked > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="All" value={props.all} />
          </tr>
          <tr>
            <StatisticLine text="Average" value={props.average} />
          </tr>
          <tr>
            <StatisticLine text="Positive" value={props.positive} symbol="%" />
          </tr>
        </tbody>
      </table>
    );
  } else return <h4>No feedback given</h4>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [ifButtonClicked, setIfButtonClicked] = useState(0);

  const btnGood = () => {
    setGood(good + 1);
    setIfButtonClicked(ifButtonClicked + 1);
  };
  const btnNeutral = () => {
    setNeutral(neutral + 1);
    setIfButtonClicked(ifButtonClicked + 1);
  };
  const btnBad = () => {
    setBad(bad + 1);
    setIfButtonClicked(ifButtonClicked + 1);
  };
  const sum = good + bad + neutral;
  const average = (good - bad) / sum;
  const positive = (good / sum) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Mybutton click={btnGood} text="Good" />
      <Mybutton click={btnNeutral} text="Neutral" />
      <Mybutton click={btnBad} text="Bad" />

      <h1>Statistic</h1>
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        sum={sum}
        average={average}
        positive={positive}
        ifButtonClicked={ifButtonClicked}
      ></Statistic>
    </div>
  );
};

export default App;
