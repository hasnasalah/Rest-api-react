import type {CountryCardProps} from "../types/index";
export default function CountryCard({name,flags,region,population,capital}:CountryCardProps){

     

return(
 <>
 <li>
  <img src={flags.svg} alt={name.common}/>
  <h3>{name.official}</h3>
  <p><strong>Population: </strong>{population}</p>
  <p><strong>Region: </strong>{region}</p>
  <p><strong>Capital: </strong>{capital?.join(", ") || "N/A"}</p>
 </li>
 </>
)


   





}