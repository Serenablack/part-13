import axios from "axios";
import React, {useState,useEffect} from "react";



const DetailInfo = ({country})=>{

const [temperature,setTemperature] = useState("");
const [weatherIcon, setWeatherIcon] = useState("");
const [weather, setWeather] = useState("");
const [wind, setwind] = useState("");                          


useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=14a9ba990f2050f68f19027c2a3a94e8&units=metric`)
  .then((response)=>{
    setTemperature(response.data.current.temp);
    setWeatherIcon(response.data.current.weather[0].icon);
    setWeather(response.data.current.weather[0].main);
    setwind(response.data.current.wind_speed);
    console.log(response.data.current);
  })
  .catch((error)=>{
    alert(error.message);
  })

});


return (
<div>
<h1>{country.name.common}</h1>
<p>Capital: {country.capital}</p>
<p>Area: {country.area}</p>
<h4>Languages: </h4>

{

Object.keys(country.languages).map((language, i) => {

    
    return <ul key={i}>{country.languages[language]}</ul>;
        })}

<p>Flag</p>

<img src={country.flags.svg} alt="flags" style={{width:"180px", height: "150px"}}/>


<h1>Weather in {country.name.common}</h1>
      <h4> Temperature {temperature} Degree Celcius</h4>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weather}
      />
      <p>Wind {wind} m/s</p>

</div>

)

}

export default DetailInfo;