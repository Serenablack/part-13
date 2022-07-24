import React from "react";

//creating Myh1 component
// const Myh1 = (props) => {

const Myh1 = ({ name, lastName, count }) => {
  //   newName = `New Name is ${props.name}`;//props is not defined
  console.log(name);
  //react component is ultimately the HTML tag.
  //   return React.createElement("h1", {}, "This is from REACT H1 component");

  //JSX is a technology in JS which allows us to write html code
  return (
    <h1>
      {/* Hi Tej Fellow {newName} {props.name} {props.lastName} */}
      Hi Tej Fellow {name} {lastName} {count}
    </h1>
  );
};

//props is an object and hence can be spread as{name , lastName}

export default Myh1;
