import {useParams}from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {CountryDetails } from "../types";
import LoadingSpinner from "../component/LodingSpinner";
import ErrorMessage from "../component/ErrorMessage";
import BorderBtn from "../component/BorderBtn";
import { Link,useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../component/Header";


export function CountryDetails(){
     const { countryName } = useParams<{ countryName: string}>();
     const navigate=useNavigate();
        const countryUrl1="https://restcountries.com/v3.1/all?fields=cca3,name,population,capital,region,flags";
    const { data:data1, isLoading:isLoading1, error:error1 } =useFetch<CountryDetails[]>(countryUrl1);
       const countryUrl2="https://restcountries.com/v3.1/all?fields=cca3,currencies,languages,tld,subregion,borders";
    const { data:data2, isLoading:isLoading2, error:error2 } =useFetch<CountryDetails[]>(countryUrl2);
    if(!data1||!data2) return;
   const mergedData= data1.map(country => ({
  ...country,
  ...data2.find(c => c.cca3 === country.cca3)
}));
    const isLoading=isLoading1||isLoading2;
    const error=error1||error2;
    if(isLoading) return <LoadingSpinner/>;
    if (error) return (<ErrorMessage message={error.message}/>);
    const country = mergedData?.find(c => c.name.common.toLowerCase() === countryName?.toLowerCase());
    if (!country) return <ErrorMessage message="Country not found" />;
 

const onClickBack=()=>{
navigate("/home");
}

    return(
    <main id="country-modal-page">
      <Header/>
      <button className="close-btn" onClick={onClickBack}>Back</button>
    <section id="country-modal">
     
         
           <div id="image-container">
            <img src={country.flags.png} alt={country.flags.alt}/>
           </div>
           <section id="info">
           <div id="title">
              <h3>{country.name.official}</h3>
            </div>
           <div id="info-a"> 
             <p>
                <strong>Native Name: </strong>
                 {country.nativeName?Object.values(country.nativeName)[0].official : country.name.common}
             </p>
              <p>
                <strong>Population: </strong>
                {country.population}
             </p>
              <p>
                <strong>Region: </strong>
                {country.region}
             </p>
             <p>
                <strong>Sub Region: </strong>
                {country.subregion}
             </p>
             <p>
                <strong>Capital: </strong>
                {country.capital?.join(", ") || "N/A"}
             </p>
            </div> 
           <div id="info-b">
            <p>
                <strong>Top Level Domain: </strong>
                {country.tld}
             </p>
             <p>
                
                <strong>Currencies: </strong>
                {country.currencies ? Object.values(country.currencies).map((cur) => cur.name).join(", ") : ""}
                    
             </p>
              <p>
                <strong>Languages: </strong>
                {country.languages?Object.values(country.languages).join(", "):"N/A"}
              </p>
           </div>
           <div id="info-c">
           
  <div className="border-container">
    <p><strong>Borders: </strong></p>
    {country.borders&&(
      country.borders.map(code => {
        const borderCountry = mergedData.find(c => c.cca3 === code);
        if (!borderCountry) return null;
        return (
          <Link key={code} to={`/country/${borderCountry.name.common}`}>
            <BorderBtn countryName={borderCountry.name.common} />
          </Link>
        );
    } ) )} 
      </div>
      </div>
           </section>
        
  </section>
     </main>  
    
    );
}