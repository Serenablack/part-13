import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')



  const addPerson =(event)=>{

    event.preventDefault();
    // console.log(event.target)

 
  
    if(persons.some(person=>person.name===newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newPerson = {
        name: newName,
        
      }
      setPersons([...persons,newPerson]);
      setNewName('');
    }
 
 
 
  }

  const handleOnChange = (event)=>{
    // console.log(event.target.value)//yo garda kheri target ko kunai euta property value ma data change vairaxa tara gui ma dekhako xaina
    // because react le note ko value print gariraxa. So, that property is value
    setNewName(event.target.value)
    // console.log(newName)
  
  }

  return (


    <div>

      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
    
      <div>
        Name :   <input placeholder="Please Enter Name" value={newName} onChange={handleOnChange}/>
      </div><br />
      <button>Add Name</button>
      </form>
  
      <h2>Phone Number</h2>
      {
        persons.map(frn=>
          <Person person={frn}/>
        )
      }
      

{/* {console.log(persons)} */}

    </div>
  )
}

export default App