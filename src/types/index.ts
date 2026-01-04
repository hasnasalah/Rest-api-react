import type { ReactNode } from "react";

export interface ThemeProps{
theme: 'light'|'dark',
  toggleTheme: () =>void;
}
export interface Childern{
    children:ReactNode;
}
export interface SearchInputProps{
    handeleSubmit:(value:string)=>void;
    error:string;
}
export type region='Africa' | 'Americas' | 'Asia'|'Europe'|'Oceania';
export interface FilterByRigionProps{
     onFilterChange: (region: region)=>void;
}
export interface CountryName {
  common: string;
  official: string;
}

export interface NativeNameValue {
  official: string;
  common: string;
}
export interface NativeNames {
  [languageCode: string]: NativeNameValue;
}

export interface CountryFlags {
  svg: string;
  png: string;
  alt?: string;
}

export interface Country {
  name: CountryName;
  flags: CountryFlags;
  population: number;
  region: string;
  capital?: string[];
}
export interface currencies{
  name: string;
}

export interface CountryDetails extends Country{
nativeName:NativeNames;
languages:string[];
subregion?: string; 
border:string[];
tld:string;

}
export interface CountryCardProps {
  name: {common:string; official: string;};
  flags: { svg: string; png?: string };
  population: number;
  region: string;
  capital?: string[];
}
