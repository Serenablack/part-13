import Myh1 from "./Myh1";
import React from "react";

// using Myh1 component in App

const App = ({ counter }) => {
  //   return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()]); //passing in array
  let name1 = "Subash";

  return (
    <div>
      <h1>{counter}</h1>
      <Myh1 name="Amir" count={counter} />
      <Myh1 name={name1} lastName="Tamang" />
      <Myh1 name="Niru" />
      <Myh1 />
      <Myh1 name="Rame ko Nati" lastName="Hamja" />
    </div>
  );
};

export default App;
