import Part from "./Part";

const Content = ({ parts }) => {
  //   console.log(typeof parts); //parts is object while passing it was array
  // console.log(parts[0].name);
  // console.log(parts[0].exercises);
  return (
    <div>
      <Part p1={parts[0].name} e1={parts[0].exercises} />
      <Part p1={parts[1].name} e1={parts[1].exercises} />
      <Part p1={parts[2].name} e1={parts[2].exercises} />
    </div>
  );
};

export default Content;
