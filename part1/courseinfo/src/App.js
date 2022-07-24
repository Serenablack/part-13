import Content from "./Content";
import Total from "./Total.";
import Header from "./Header";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        partA={part1.name}
        partB={part2.name}
        partC={part3.name}
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
      <Total
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
    </div>
  );
};

export default App;
