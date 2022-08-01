const Person =({filteredname})=>{


    return (
        <div>
            {filteredname.map((person,index) => {
            return(
             <h3 key={index} ><p> {`${person.name} ${person.number}`} </p> </h3>
            )
           })}
        </div>
        
    )
}

export default Person;