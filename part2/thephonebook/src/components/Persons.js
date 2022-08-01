import React from "react";
import Person from "./Person";
export function Filter({
 filteredname
}) {
  return <div>
     {filteredname.map((person, index) => {
      return <Person key={index} person={person}> </Person>;
    })}
     </div>;
}
  