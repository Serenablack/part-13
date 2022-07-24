import { useState } from "react";

const Statistic = (props) => {
  if (props.ifButtonClicked > 0) {
    return (
      <div>
        <p> Good {props.good}</p>
        <p> Neutral {props.neutral}</p>
        <p> Bad {props.bad}</p>
        <p>all {props.sum} </p>
        <p> average {props.average}</p>
        <p> positive {props.positive}%</p>
      </div>
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
      <button onClick={btnGood}>good</button>
      <button onClick={btnNeutral}>neutral</button>
      <button onClick={btnBad}>bad</button>
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
