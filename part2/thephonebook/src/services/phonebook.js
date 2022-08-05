import axios from "axios";


const getData = ()=>{


    return (
        axios.get("http://localhost:3001/persons").then((response=>{
            return response.data
        }))
    )
}


const postData = (contactInfo)=>{
  

    return (
 
        axios.post("http://localhost:3001/persons",contactInfo).then((response=>{
            return response.data;
        }))
    )
}

const deleteData = (id)=>{
return(
    axios.delete(`http://localhost:3001/persons/${id}`).then((response=>{
        console.log('COntact deleted')
    }))
)
}

const updateData=(id)=>{
    return (
        axios.delete(`http://localhost:3001/persons/${id}`).then((response=>{
            return response.data;
        }))
    )
}


export default {getData,postData,deleteData,updateData};