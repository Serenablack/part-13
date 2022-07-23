import Myh1 from "./Myh1";
import React from "react";

// using Myh1 component in App

const App = () => {
  //   return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()]); //passing in array
  return (
    <div>
      <Myh1>1</Myh1>
      <Myh1>2</Myh1>
      <Myh1>3</Myh1>
      <Myh1>4</Myh1>
    </div>
  );
};

export default App;
