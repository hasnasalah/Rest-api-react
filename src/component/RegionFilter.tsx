import type{FilterByRigionProps,region} from "../types/index";

export default function RegionFilter({onFilterChange}:FilterByRigionProps){

 const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value as region;
    onFilterChange(region);
  };
return(     
     <div className="filter-container">
      <select id="region-filter" className="filter-select" onChange={handleFilterChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      </div>
);



}