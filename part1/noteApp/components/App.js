import Myh1 from "./Myh1";
import React from "react";
import { useState } from "react";

// using Myh1 component in App

const App = ({ counter }) => {
  //use state function le euta parameter linxa could be anything object number, string
  //returns a array of two element; first is the state and other is the function to change the state
  //real life example, person object use state ma pass garyo vane object create garda each time refresh hunxa with different values of object

  //state ko value change hune bittikai entire component refresh hunxa
  const [myCount, setMyCount] = useState(1);

  //setTime out function le harek second ma hole component call garxa
  setTimeout(() => {
    // let newCount = [1, 2, 3, 4, 5];//renders every second infinite times
    //setmycount is a method
    // setMyCount(newCount);
    setMyCount(myCount + 1);
  }, 1000);

  let name1 = "Subash";

  return (
    <div>
      <h1>{myCount}</h1>
      <Myh1 name="Amir" count={myCount} />
      <Myh1 name={name1} lastName="Tamang" />
      <Myh1 name="Niru" />
      <Myh1 name="Rame" lastName="Hamja" />
    </div>
  );
};

export default App;
