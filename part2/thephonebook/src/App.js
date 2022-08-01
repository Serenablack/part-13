import { useState } from "react";
import Person from "./components/Person";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 9865457708 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filter,setFilter]=useState("");



  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleOnChangeNumber = (event) => {
    const number = event.target.value;
    // if (String(number) > 10) {
    //   alert("PhoneNumber cannot be more than 10digits");
    // } else if (String(number) === "") {
    //   alert("PhoneNumber cannot be Empty!!");
    // } else {
    //   setNewName(number);
    // }
    setPhoneNumber(number)
  };


const handleOnChangeFilter=(event)=>{
  // console.log(event.target.value);
  const filtname = event.target.value;
  setFilter(filtname);

}

let filteredname = persons.filter((person)=>person.name.includes(filter));
// console.log(filteredname);







 const addPerson = (event) => {
    event.preventDefault();
    // console.log(event.target)

    // const filterName = ()=> persons.some(Fname=>Fname.name===newName);
    if (persons.some((Pname) => Pname.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }
   
    setPersons([...persons, {name: newName,number: phoneNumber,}]);
    setNewName("");
    setPhoneNumber("");
    
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter :<input  value={filter}   onChange={handleOnChangeFilter} type="text"  />
        </div>
      <form onSubmit={addPerson}>
    
        <div>
          Name : <input placeholder="Please Enter Name" value={newName} onChange={handleOnChangeName} />
        </div>
        <div>
          Number :<input placeholder="Please Enter Number"  value={phoneNumber}   onChange={handleOnChangeNumber} type="number"  />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      <h2>Phone Numbers</h2>
     
      {filteredname.map((person,index) => {
       return(
        <Person key={index} person={person}> </Person>
       )
      })}
    </div>
  );


};
export default App;
