const Total = ({ parts }) => {
//   console.log(parts);



const total = parts.reduce(
    (preVal, currVal)=>preVal+currVal.exercises,0
);

  return (
  <h3>Total Number of Exercises {total}</h3>
  );
};
export default Total;
