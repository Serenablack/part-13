import Part from "./Part";

const Content = ({ partA, partB, partC, ex1, ex2, ex3 }) => {
  return (
    <div>
      <Part p1={partA} e1={ex1} />
      <Part p1={partB} e1={ex2} />
      <Part p1={partC} e1={ex3} />
    </div>
  );
};

export default Content;
