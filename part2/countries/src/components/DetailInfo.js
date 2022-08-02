


const DetailInfo = ({country})=>{


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
</div>

)

}

export default DetailInfo;