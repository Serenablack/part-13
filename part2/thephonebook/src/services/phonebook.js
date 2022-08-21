import axios from "axios";

const baseUrl = "/api/persons/";
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
  console.log(id);
  return axios.delete(`${baseUrl}/${id}`).then((response) => {
    return response.data;
  });
};

// const updateData=(id,newObject)=>{

const updateData = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => {
    // console.log(response.data);
    return response.data;
  });
};

export default { getData, postData, deleteData, updateData };
