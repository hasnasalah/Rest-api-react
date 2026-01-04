import {useParams}from "react-router-dom";


export function CountryDetails(){
     const { countryName } = useParams<{ countryName: string}>();
    return(<>
    <p>Country to be added</p></>);
}