import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {CountryDetails} from "./pages/CountryDetails"
import './App.css';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<HomePage/>}/>
   <Route path="/home" element={<HomePage/>}/>
    <Route path="/country/:countryName" element={<CountryDetails/>}/>
</Routes>
     </>
   
  )
}

export default App
