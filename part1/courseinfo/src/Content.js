const Content = ({ partA, partB, partC, ex1, ex2, ex3 }) => {
  return (
    <div>
      <h3>
        {partA} {ex1}
      </h3>
      <h3>
        {partB} {ex2}
      </h3>
      <h3>
        {partC} {ex3}
      </h3>
    </div>
  );
};

export default Content;
