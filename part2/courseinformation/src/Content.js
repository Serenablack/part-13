
import Part from './Part';


const Content = ({ part }) => {
    // console.log(part.name)

  return (
    <div>
    {part.map((item) => (
      <Part key={item.id} p1={item.name} e1={item.exercises} />
    ))}
  </div>
  );
};

export default Content;
