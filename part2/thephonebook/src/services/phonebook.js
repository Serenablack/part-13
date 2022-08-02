import axios from "axios";


const getData = ()=>{


    return (
        axios.get("http://localhost:3001/persons").then((response=>{
            return response.data
        }))
    )
}


const postData = (contactInfo)=>{
    console.log(contactInfo);

    return (
 
        axios.post("http://localhost:3001/persons",contactInfo).then((response=>{
            return response.data;
        }))
    )
}


export default {getData,postData};