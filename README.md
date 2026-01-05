# Frontend Mentor - REST Countries API with color theme switcher solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Setup]
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
A responsive web application that displays country data with detailed information and interactive features such as search, region filtering, dark mode, and border navigation this is refactored project from Vanilla Javascript into React and typescript.  

### The challenge

- **Country Listing**: Shows a list of country cards with flags, name, population, region, and capital.  
- **Search**: Search for countries by name using the input field.  
- **Filter by Region**: Select a region from a dropdown to filter countries.  
- **Country Details Modal**: Click on a country card to open a modal with:
  - Full country name  
  - Native name  
  - Population, region, sub-region, and capital  
  - Top-level domain, currencies, languages  
  - Bordering countries with a clickable buttons.
- **Dark Mode**: Toggle between light and dark themes.  
- **Responsive Design**: Works on desktops, tablets, and mobile devices. 

### Screenshot

![](./screenshot/Screenshot%202025-11-26%20162310.png)

![](./screenshot/Screenshot%202025-11-26%20162503.png)

## My process

### Built with

* Built with
* React
* TypeScript
* Vite
* React Router
* Semantic HTML5
* CSS custom properties
* Flexbox & CSS Grid

### What I learned

* Refactoring a vanilla JavaScript project to React
* Structuring components and pages.
* Using React Router for dynamic country routes
* Mapping complex objects (currencies, languages, borders) with typescript interfaces
* Implementing dark mode using CSS variables and context Hook
* Separating data logic from UI components
* using costum Hooks like useFetch to fetch data dynamicly and useLocalStorage 


### Continued development
* Improve accessibility (keyboard navigation, ARIA labels)
* Add smooth transitions when opening and closing the modal

### Useful esources:
* [Vite](https://vitejs.dev/) – Bundler and build tool
* [TypeScript](https://www.typescriptlang.org/) –Typescript
* [REST Countries API](https://restcountries.com/) – Country data source
* [[React Icons](https://react-icons.github.io/react-icons/)]
* [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – Layout reference
* [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) – Grid reference
* [MDN Web Docs](https://developer.mozilla.org/) – JavaScript & DOM references
* [Vercel](https://vercel.com/) – Deployment platform
* [Medium](https://medium.com/geekculture/accessing-data-inside-nested-data-structures-in-javascript-an-example-21c5ea1372e3) netsed Objects
* [youtube](https://www.youtube.com/watch?v=VU0BQnuPfwc) maping nested objects
* [Objects](https://javascript.info/keys-values-entries#transforming-objects)


## setup
**Clone the repository**:

```bash
git clone https://github.com/hasnasalah/Rest-api-react
cd REST-Countries-API
npm install
npm run dev

```
---


## Author

- Website - [Hasna Ben Jillali](https://rest-countries-rho-eosin.vercel.app/)


