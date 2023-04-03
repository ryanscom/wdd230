
const cityName = 'Carlsbad'
const APIkey = '77afa667ff8babd83fe8b450d3d5dfb8'
const stateAb = 'CA'
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateAb}3166-2:US&appid=${APIkey}&units=imperial`;

const weatherForcastUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${cityName},${stateAb},Us&units=imperial&appid=${APIkey}`


// Fetch weather API
async function getWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json()
            displayWeather(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getWeather();

// Get HTML ID's
const currTemp = document.querySelector('#temp')
const weatherIcon = document.querySelector('#weatherIcon')
const disc = document.querySelector('#disc')
const windSpeed = document.querySelector('#windSpeed')
const windChill = document.querySelector('#windChill')
const humidity = document.querySelector('#humidity')


// Function to capitalize a string
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
}

// Function to format a date string
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}`;
  }

// Function to display the weather from the API
function displayWeather(weatherData) {
    currTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°F`
    humidity.innerHTML = `${weatherData.main.humidity}%`
    
    const wind = weatherData.wind.speed.toFixed(2)
    windSpeed.innerHTML = `${wind} mph`
  
    const description = capitalize(weatherData.weather[0].description)
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`

    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', description)
    weatherIcon.setAttribute('loading', 'lazy')
    weatherIcon.setAttribute('width', '64')
    disc.textContent = description

    // Calculate wind chill and display it
    const temp = parseFloat(weatherData.main.temp.toFixed(0));
    const speed = parseFloat(weatherData.wind.speed.toFixed(2));
    if (temp <= 50.0 && speed >= 3.0) {
        const currWindChill = windChillFahr(temp, speed);
        windChill.innerHTML = `${currWindChill}&deg;F`;
    } else {
        const chill = document.querySelector('.chill')
        chill.setAttribute('class', 'hidden')
    }
}


//  Function that calculates wind chill factor
function windChillFahr(temp, Speed) {
    const wChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(Speed, 0.16) + 0.4275 * temp * Math.pow(Speed, 0.16);
    return wChill.toFixed(2);
}


// Fetch forecast API
async function forecastApi() {
    try {
        const response = await fetch(weatherForcastUrl)
        if (response.ok) {
            const data = await response.json()
            displayForecast(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

forecastApi()

const displayForecast = (forecastData) => {
    // Get the element that we'll be appending the forecast cards to
    const cards = document.querySelector('#forcastCards');
  
    // Filter the list to only include items with a time of 12:00:00, and limit to the first 3 items
    const relevantListItems = forecastData.list.filter((item) => {
      return item.dt_txt.slice(-8) === "12:00:00";
    }).slice(0, 3);
  
    // Loop through the relevant list items and create a card for each one
    relevantListItems.forEach((item) => {
      // Create a div to hold the card contents
      const card = document.createElement('div');
      card.classList.add('forcastDiv');
  
      // Create a paragraph for the date and add it to the card
      const theDate = document.createElement('p');
      theDate.classList.add('forcast');
      const forecastDate = new Date(item.dt * 1000);
      theDate.textContent = formatDate(forecastDate);
      card.appendChild(theDate);
  
      // Create an image for the weather icon and add it to the card
      const icons = document.createElement('img');
      icons.classList.add('forcast');
      const iconsrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      icons.setAttribute('src', iconsrc);
      icons.setAttribute('alt', capitalize(item.weather[0].description));
      icons.setAttribute('width', '50');
      icons.setAttribute('loading', 'lazy');
      card.appendChild(icons);
  
      // Create a paragraph for the temperature and add it to the card
      const temperature = document.createElement('p');
      temperature.classList.add('forcast');
      temperature.textContent = `${item.main.temp.toFixed(0)}°F`;
      card.appendChild(temperature);
  
      // Create a paragraph for the weather condition and add it to the card
      const condition = document.createElement('p');
      condition.classList.add('forcast');
      condition.textContent = capitalize(item.weather[0].description);
      card.appendChild(condition);
  
      // Append the completed card to the parent element
      cards.appendChild(card);
    });
  };


  




