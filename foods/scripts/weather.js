
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
        // windChill.innerHTML = 'N/A';
        // windChill.setAttribute('class', 'hidden')
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

// Display the three day forecast
const displayForecast = (forecastData) => {
    const cards = document.querySelector('#forcastCards');
    if (typeof forecastData.list === 'object' && forecastData.list !== null && Array.isArray(forecastData.list)) {
        for (let i = 0; i < 24; i++) {
            let getList = forecastData.list[i]
            if (getList.dt_txt.slice(-8) == "18:00:00") {
                let card = document.createElement('div')
                let theDate = document.createElement('p')
                let temperature = document.createElement('p')
                let condition = document.createElement('p')
                let icons = document.createElement('img')
                let iconsrc = `https://openweathermap.org/img/wn/${getList.weather[0].icon}.png`

                let forecastDate = new Date(getList.dt * 1000);
                theDate.textContent = formatDate(forecastDate)

                temperature.textContent = `${(getList.main.temp).toFixed(0)}°F`
                condition.textContent = capitalize(getList.weather[0].description)
                icons.setAttribute('src', iconsrc);
                icons.setAttribute('alt', condition)
                icons.setAttribute('width', '50')
                icons.setAttribute('loading', 'lazy')

                card.setAttribute('class', 'forcastDiv')
                theDate.setAttribute('class', 'forcast')
                temperature.setAttribute('class', 'forcast')
                condition.setAttribute('class', 'forcast')
                icons.setAttribute('class', 'forcast')
             
                card.appendChild(theDate)
                card.appendChild(icons)
                card.appendChild(temperature)
                card.appendChild(condition)
                cards.appendChild(card)
            }
        }
    }
}



 
  




