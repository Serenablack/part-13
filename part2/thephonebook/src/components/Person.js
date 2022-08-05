const Person =({filteredname,displayMessage})=>{

// const displayMessage=()=>alert('are u sure want to delete??')
    return (
        <div>
            {filteredname.map((person,index) => {
            return(
                <div key={index}>
                 <span  >{`${person.name} ${person.number}`}  </span>
                 <button name={person.id} onClick={displayMessage}>delete</button>
                </div>
         
            )
           })}
        </div>
        
    )
}

export default Person;