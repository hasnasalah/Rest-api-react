Project Reflection

This project is already completed in vanilla JavaScript application and now upgraded to React with TypeScript, which improved the structure and the usability of the code. My development process was focused on breaking the app into reusable components, separating concerns between the componenets and the costum hooks and the Ui componenets as well as the pages.

One of the main challenges I faced was handling the complex and deeply nested data returned by the REST Countries API. Properties such as currencies, languages, and borders required inspection though it is easy now with the help of typescript interfaces. TypeScript initially made this more easy, especially when working with optional or nullable fields like borders. I solved this by conditional rendering, and Object.values() to safely map over objects.

Another challenge was handling country data arrays. The REST Countries API limits the number of fields that can be requested per endpoint which is 10, while the application required more than that. To solve this, I fetched data from twice, each requesting a different set of fields. I then merged the results into a single array based on matching country identifiers I used (cca3).

The dark mode feature was implemented using CSS variables, allowing theme changes without re-rendering components..

If I continue developing this project, I would improve accessibility by adding ARIA labels and better keyboard navigation. I would also enhance user experience by adding animations for page transitions, and improved error handling. Overall, this project strengthened my understanding of React, TypeScript, and real-world API integration.