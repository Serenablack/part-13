import Myh1 from "./Myh1";
import React from "react";
import { useState } from "react";
import Mybutton from "./Mybutton";
import Display from "./Display";
import HistoryDisplay from "./HistoryDisplay";

// using Myh1 component in App

const App = ({ counter }) => {
  //use state function le euta parameter linxa could be anything object number, string
  //returns a array of two element; first is the state and other is the function to change the state
  //real life example, person object use state ma pass garyo vane object create garda each time refresh hunxa with different values of object

  //state ko value change hune bittikai entire component refresh hunxa
  const [myCount, setMyCount] = useState(1);
  const [clickButtonHistry, setClickButtonHistory] = useState([]);

  console.log("calling");

  const increaseCountApp = () => {
    setMyCount(myCount + 1);
    //state change vairaxa tara btnhistory display vako xaina...yo code le..
    clickButtonHistry.push("App");
    setClickButtonHistory(clickButtonHistry);
  };
  const increaseCountButton = () => {
    setMyCount(myCount + 1);
    setClickButtonHistory([...clickButtonHistry, "Button"]);
    //this is same as clickButtonHistory.concat("Button")
  };

  let name1 = "Subash";

  return (
    <div>
      <Display showValue={myCount} />
      <HistoryDisplay history={clickButtonHistry} />
      <h1>{myCount}</h1>
      <button onClick={increaseCountApp}> click me in same component</button>
      <Mybutton buttonHandler={increaseCountButton} />
      <Myh1 name="Amir" count={myCount} />
      <Myh1 name={name1} lastName="Tamang" />
      <Myh1 name="Niru" />
      <Myh1 name="Rame" lastName="Hamja" />
    </div>
  );
};

export default App;
