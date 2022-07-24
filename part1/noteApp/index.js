import App from "./components/App";
import ReactDOM from "react-dom/client";
import React from "react";

console.log("Hello from JS!");

//html ko root id vako div ma react id app rakhnu ko lagi:
//method1
// ReactDOM.render(React.createElement("div",{},"This is from REACT"),document.querySelector("#root"))

//using function to create react app

// const App=()=>{

//     return React.createElement("div",{},"This is from REACT component")

// }

//react 18 ma yo line le kam gardaina
// ReactDOM.render(App(), document.querySelector("#root"));
let myCount = 1;

const refresh = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App counter={myCount} />
  );
};

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
refresh();

//App render vaneko refresh hunu ho browser ma however in console refresh function duichoti call garda duichoti name
// print garxa
//same component lai duichoti render garnu vaneko append hudai jane haina but replace the old one.
//

//myCount += 1;

// refresh();

// //calling a same function twice to render.

//using setInterval
setInterval(() => {
  refresh();
  myCount++;
}, 1000);
