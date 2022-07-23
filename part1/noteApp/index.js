console.log('Hello from JS!')




//html ko root id vako div ma react id app rakhnu ko lagi:
//method1
// ReactDOM.render(React.createElement("div",{},"This is from REACT"),document.querySelector("#root"))


//using function to create react app

// const App=()=>{

//     return React.createElement("div",{},"This is from REACT component")

// }



//creating Myh1 component
const Myh1 = ()=>{
    return React.createElement("h1",{},"This is from REACT H1 component")
}

// using Myh1 component in App

const App=()=>{

    return React.createElement("div",{},[Myh1(),Myh1(),Myh1(),Myh1()]) //passing in array

}

ReactDOM.render(App(), document.querySelector("#root"))