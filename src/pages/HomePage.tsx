import Header from "../component/Header";
import RegionFilter from "../component/RegionFilter";
import SearchBar from "../component/SearchBar";
import LoadingSpinner from "../component/LodingSpinner";
import ErrorMessage from "../component/ErrorMessage";
import CountryCard from "../component/CountryCard";
import useFetch from "../hooks/useFetch";
import type {Country, region} from "../types/index";
import {Link,useNavigate} from "react-router-dom";


import "../App.css";
import { useState } from "react";

export default function HomePage(){
    const navigate = useNavigate();
    const [SearchError,setSeachError]=useState("");
    const [selectedRegion, setSelectedRegion] = useState<region | "">("");
    const countryUrl="https://restcountries.com/v3.1/all?fields=cca3,name,population,capital,region,flags";
    const { data, isLoading, error } =useFetch<Country[]>(countryUrl);
    if(isLoading) return <LoadingSpinner/>;
    if (error) return (<ErrorMessage message={error.message}/>);
    const handeleSearch=(searchValue:string)=>{
        const found = data?.find(c => c.name.common.toLowerCase() === searchValue.toLowerCase());
          if(found){
             navigate(`/country/${searchValue}`);
           }
          else {
             setSeachError("Country Not Found")
           }
    }
    const handeleFilterByRegion=(region:region)=>{
       setSelectedRegion(region);
    }
    const filteredCountries=data?.filter(country=>
        {if (selectedRegion) {
           return (country.region === selectedRegion);
        }
        else {
            return true; 
        }
    });

return (
   <>
   <Header/>
   <section id="search-section">
   <SearchBar handeleSubmit={handeleSearch} error={SearchError}/>
   <RegionFilter onFilterChange={handeleFilterByRegion}/>
   </section>
   
   <ul className="countries-grid">
   {filteredCountries?.map(country=> <Link to={`/country/${country.name.common}`} key={country.name.common} style={{textDecoration: "none", color: "inherit"}}> <CountryCard  
   name={country.name} flags={country.flags}
    region={country.region} population={country.population} 
    capital={country.capital}/></Link>)}
   </ul>
   </>
);







}