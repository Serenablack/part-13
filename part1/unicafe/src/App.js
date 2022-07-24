import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnGood = () => setGood(good + 1);
  const btnNeutral = () => setNeutral(neutral + 1);
  const btnBad = () => setBad(bad + 1);
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
      <p> Good {good}</p>
      <p> Neutral {neutral}</p>
      <p> Bad {bad}</p>
      <p>all {sum} </p>
      <p> average {average}</p>
      <p> positive {positive}%</p>
    </div>
  );
};

export default App;
