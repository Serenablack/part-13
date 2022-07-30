import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')



  const addPerson = ()=>{
    setPersons([...persons])}

  return (
    <div>
      <h2>Phone book</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit" newName={newName} onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
    </div>
  )
}

export default App