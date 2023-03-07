
const cityName = 'Port+Townsend'
const APIkey = '77afa667ff8babd83fe8b450d3d5dfb8'
const stateAb = 'WA'
const weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateAb}3166-2:US&appid=${APIkey}&units=imperial&`;


// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// get api info function
async function apiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
// Call the api function
  apiFetch();


  // function to capitialize first letter of a word. 
  function capitalize(str) {return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

  // Function to display the results given by the weather API
  function displayResults(weatherData) {
    const currentTemp = parseFloat(weatherData.main.temp.toFixed(0));
    const windSpeed = parseFloat(weatherData.wind.speed.toFixed(2));
    const desc = weatherData.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
    // Display temperature
    document.querySelector('#tempSpan').innerHTML = `<strong>${currentTemp}</strong>`;
  
    // Display wind speed
    document.querySelector('#windSpeedSpan').innerHTML = `<strong>${windSpeed}</strong>`;
  
    // Display wind chill if applicable
    if (currentTemp <= 50.0 && windSpeed >= 3.0) {
      const windChill = windChillFahr(currentTemp, windSpeed);
      document.querySelector('#windChillSpan').innerHTML = windChill;
    } else {
      document.querySelector('#windChillSpan').innerHTML = 'N/A';
    }
  
    // Display weather icon and description
    const weatherIcon = document.querySelector('#weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);
  }
  
  // Function that calculates wind chill factor
  function windChillFahr(temp, windSpeed) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  }
