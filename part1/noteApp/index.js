import App from "./components/App";
import ReactDOM from "react-dom/client";

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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
