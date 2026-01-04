import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import  { FiSun, FiMoon } from "react-icons/fi";



export default function Header(){
    const {theme,toggleTheme}=useContext(ThemeContext)!;
    return(
    <header>
        <div className="title">
        Where in the World?
        </div>
         <button
      onClick={toggleTheme}
      style={{
        margin: "20px 0",
        padding: "10px 20px",
       background: theme === 'light' ? 'white' : 'hsl(207, 26%, 17%)', 
       color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'white',
        border: "none",
        borderRadius: "5px",
      }}
    >
     {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </header>
    );
}