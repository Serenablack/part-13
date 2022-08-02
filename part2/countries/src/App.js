import { useState, useEffect } from "react";
import axios from "axios";
import DetailInfo from "./components/DetailInfo";

function App() {
  const [countryName, setCountryName] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountryName(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const findCountries = (event) => {
    // event.preventDefault();
    setSearchCountry(event.target.value);
    let filterDesh=countryName.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry)
  );
    setFilteredCountry(filterDesh);
};


  const showCountry=(event)=>{
  //  console.dir(event.target.previousSibling.innerHTML)
   const countrry = event.target.previousSibling.innerHTML.trim();

   setFilteredCountry(filteredCountry.filter((country)=>country.name.common===countrry)); 

  }
  // console.dir(countryName)
  return (
    <div>
      <h2>
        Find Countries{" "}
        <input type="text" value={searchCountry} onChange={findCountries} />
      </h2>
      {filteredCountry.length>10?<h3>Too many matches, specify another filter</h3>:filteredCountry.length===1?<DetailInfo country={filteredCountry[0]}/>:filteredCountry.map((country) => {
        return <div key={country.cca2}>
          <span >{country.name.common}</span>
        <button  onClick={showCountry}>show</button>
        </div>
      })}

    </div>
  );
}

export default App;
