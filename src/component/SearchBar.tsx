import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import type{SearchInputProps} from "../types/index";
import { FaSearch } from "react-icons/fa";



export default function SearchBar({handeleSubmit,error}:SearchInputProps){
const {theme}=useContext(ThemeContext)!;



    return(
    <>
    <div id="searchInput" className="search-container">
    <span className="search-icon"><FaSearch/></span>
    <input onKeyDown={(e) => {if (e.key === "Enter") {handeleSubmit((e.target as HTMLInputElement).value)}}} 
     type="search" className="search-input" 
     style={{background: theme === 'light' ? 'white' : 'hsl(207, 26%, 17%)', 
     color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'white'}} id="search" 
     placeholder="Search"/>
    </div>
   <p id="search-error" style={{background: theme === "light" ? "blue" : "orange",
        color: theme === "light" ? "white" : "black",}} className="error-message">{error}</p>
 </>
 );
}