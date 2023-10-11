// Make a fetch request to get the country data
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    
    // Problem a: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);

   
   
    // Problem b: Get all the countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = data.filter((country) => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", smallPopulationCountries);

    
    
    // Problem c: Print the following details name, capital, flag using forEach function
    data.forEach((country) => {
      console.log("Name: ", country.name.common);
      console.log("Capital: ", country.capital);
      console.log("Flag: ", country.flags[0]);
    });

    
    
    // Problem d: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population of all countries: ", totalPopulation);

    
    // Problem e: Print the country which uses US Dollars as currency
    const usDollarCountries = data.filter((country) =>
      country.currencies && country.currencies.hasOwnProperty("USD")
    );
    console.log("Countries using US Dollars as currency:", usDollarCountries);
  })
  .catch((error) => console.error("Error fetching data:", error));

