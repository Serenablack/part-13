import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const getData = () => {
  return axios.get(`${baseUrl}`).then((response) => {
    return response.data;
  });
};

const postData = (contactInfo) => {
  return axios.post(`${baseUrl}`, contactInfo).then((response) => {
    return response.data;
  });
};

const deleteData = (id) => {
  return axios.delete(`${baseUrl}`).then((response) => {
    console.log("COntact deleted");
  });
};

// const updateData=(id,newObject)=>{
//     return (
//         axios.put(`${baseUrl}/${id}`,newObject).then((response=>{
//             return response.data;
//         }))
//     )
// }

const updateData = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => {
    // console.log(response.data);
    return response.data;
  });
};

export default { getData, postData, deleteData, updateData };
