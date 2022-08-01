import {useState,useEffect} from 'react';
import axios from "axios";
function App() {

const [countryName, setCountryName] = useState([]);
const [searchCountry, setSearchCountry] = useState("");


useEffect(() => {
  axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountryName(response.data);
    
  }).catch((error)=>{
    console.log(error.message);
  });
}, []);



const findCountries=(event)=>{
event.preventDefault();
setSearchCountry(event.target.value)

}
let filterCountry = countryName.filter((country)=>country.name.common.toLowerCase().includes(searchCountry))

// console.dir(countryName)
  return (
    
  <div>
    <h2>Find Countries <input type="text" value={searchCountry} onChange={findCountries}/></h2>
    {filterCountry.map((country)=>{
      
      return <h3 key={country.cca2}>{country.name.common}</h3>
    })} 
    <h3>{}</h3>
  </div>

  );
}

export default App;
