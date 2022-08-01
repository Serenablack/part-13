import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { useEffect, useState } from "react";
import Person from "./components/Person";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");
  //
  useEffect(() => {
    
    axios.get("http://localhost:3001/persons").then((result) => {
      setPersons(result.data);
    });
  
  }, [])
  

 
  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleOnChangeNumber = (event) => {
    const number = event.target.value;

    setPhoneNumber(number);
  };

  const handleOnChangeFilter = (event) => {
    // console.log(event.target.value);
    const filtname = event.target.value;
    setFilter(filtname);
  };

  let filteredname = persons.filter((person) => person.name.includes(filter));
  // console.log(filteredname);

  const addPerson = (event) => {
    event.preventDefault();
    // console.log(event.target)

    // const filterName = ()=> persons.some(Fname=>Fname.name===newName);
    if (persons.some((Pname) => Pname.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }
    else{
      setPersons([...persons, { name: newName, number: phoneNumber }]);
      setNewName("");
      setPhoneNumber("");
    }

   
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleOnChangeFilter={handleOnChangeFilter} />
      <h2>Add New Contact</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleOnChangeName={handleOnChangeName}
        phoneNumber={phoneNumber}
        handleOnChangeNumber={handleOnChangeNumber}
      />

      <h2>Phone Numbers</h2>

      <Person filteredname={filteredname}></Person>
    </div>
  );
};
export default App;
