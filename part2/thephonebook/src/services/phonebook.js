import axios from "axios";

const baseUrl = "/api/persons";
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
  return axios.delete(`${baseUrl}/${id}`).then((response) => {
    return response.data;
  });
};

// const updateData=(id,newObject)=>{

const updateData = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => {
    return response.data;
  });
};
// eslint-disable-next-line
export default { getData, postData, deleteData, updateData };
