import Myh1 from "./Myh1";
import React from "react";
import { useState } from "react";
import Mybutton from "./Mybutton";
import Display from "./Display";

// using Myh1 component in App

const App = ({ counter }) => {
  //use state function le euta parameter linxa could be anything object number, string
  //returns a array of two element; first is the state and other is the function to change the state
  //real life example, person object use state ma pass garyo vane object create garda each time refresh hunxa with different values of object

  //state ko value change hune bittikai entire component refresh hunxa
  const [myCount, setMyCount] = useState(1);

  console.log("calling");

  const increaseCount = () => setMyCount(myCount + 1);
  let name1 = "Subash";

  return (
    <div>
      <Display showValue={myCount} />
      <h1>{myCount}</h1>
      <button onClick={increaseCount}> click me in same component</button>
      <Mybutton buttonHandler={increaseCount} />
      <Myh1 name="Amir" count={myCount} />
      <Myh1 name={name1} lastName="Tamang" />
      <Myh1 name="Niru" />
      <Myh1 name="Rame" lastName="Hamja" />
    </div>
  );
};

export default App;
