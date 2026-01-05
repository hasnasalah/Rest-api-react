import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import  { FiSun, FiMoon } from "react-icons/fi";
import "../App.css";



export default function Header(){
    const {theme,toggleTheme}=useContext(ThemeContext)!;
    return(
    <header>
        <div className="title">
        Where in the World?
        </div>
         <button
      onClick={toggleTheme}
      
    >
     {theme === "light" ? <FiMoon size={18} className="fi-icon"/> : <FiSun size={18} className="fi-icon" />}
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </header>
    );
}