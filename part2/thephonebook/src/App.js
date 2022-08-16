import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { useEffect, useState } from "react";
import Person from "./components/Person";

import db from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  //
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    db.getData().then((data) => {
      setPersons(data);
    });
  }, []);

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
    setFilter(filtname.toLowerCase());
  };

  // console.log(persons);
  let filteredname = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );
  // console.log(filteredname);

  let naam = "";
  function getNameOnly(name) {
    let num = "0123456789";

    for (let i = 0; i < name.length; i++) {
      if (num.includes(name[i])) {
        break;
      } else {
        naam = naam + name[i];
      }
    }
    return naam;
  }

  const displayMessage = (event) => {
    const name = event.target.previousSibling.innerText;
    const id = Number(event.target.name);

    let message = window.confirm(
      `Are you Sure want to Delete ${getNameOnly(name)} `
    );
    if (message) {
      db.deleteData(id).then((data) => {
        let filteredArray = persons.filter((person) => person.id !== id);
        let x = persons.filter((x) => x.id === id);
        // console.log(newPerson[0].name);
        setPersons(filteredArray);
        setErrorMsg(`${x[0].name} has been deleted from the server`);
        setCount(0);
        setTimeout(() => {
          setErrorMsg(null);
        }, 2000);
      });
    } else {
      console.log("no");
    }
    // setFilteredCountry(filteredCountry.filter((country)=>country.name.common===countrry));
  };
  const addPerson = (event) => {
    event.preventDefault();
    // console.log(event.target)

    if (persons.some((Pname) => Pname.name === newName)) {
      let message = window.confirm(
        `${newName} is already added to phonebook, would you like to Update.`
      );
      if (message) {
        const x = persons.find((item) => item.name === newName);
        // console.log(x);
        let response = db.updateData(x.id, { ...x, number: phoneNumber });
        // console.log(response);
        response
          .then((data) => {
            // console.log(data);
            setPersons(persons.map((y) => (y.id !== x.id ? y : data)));
            setCount(1);
            setNewName("");
            setPhoneNumber("");
          })
          .catch((error) => {
            alert("Data Update Failed");
          });
      }
    } else {
      db.postData({
        name: newName,

        number: phoneNumber,
      }).then((data) => {
        setPersons([...persons, data]);
        setErrorMsg(`${newName} has been added`);
        setCount(1);
        setTimeout(() => {
          setErrorMsg(null);
        }, 2000);

        setNewName("");
        setPhoneNumber("");
      });
    }
  };

  return (
    <div>
      <h2>Heroku Phonebook</h2>
      <Notification message={errorMsg} value={count} />
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

      <Person
        filteredname={filteredname}
        displayMessage={displayMessage}
      ></Person>
    </div>
  );
};
export default App;
