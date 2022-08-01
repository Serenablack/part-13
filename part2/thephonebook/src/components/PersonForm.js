import React from "react";
export function PersonForm({
  addPerson,
  newName,
  handleOnChangeName,
  phoneNumber,
  handleOnChangeNumber
}) {
  return <form onSubmit={addPerson}>
    
        <div>
          Name : <input placeholder="Please Enter Name" value={newName} onChange={handleOnChangeName} />
        </div>
        <div>
          Number :<input placeholder="Please Enter Number" value={phoneNumber} onChange={handleOnChangeNumber} type="number" />
        </div>
        <button type="submit">Add Contact</button>
      </form>;
}
  