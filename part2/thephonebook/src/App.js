import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { useEffect, useState } from "react";
import Person from "./components/Person";

import db from "./services/phonebook";



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");
  //
  useEffect(() => {
    
    db.getData().then(data=>{
    setPersons(data)
   })
   
  
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

  console.log(persons)
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

      // axios.post("http://localhost:3001/persons",{ name: newName, number: phoneNumber }).then(response=>{
      //   // console.log(response.data)

      db.postData({name:newName,number:phoneNumber}).then(data=>{
        setPersons([...persons,data]);
        setNewName("");
        setPhoneNumber("");
      })

   
  
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
