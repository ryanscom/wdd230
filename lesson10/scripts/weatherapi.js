const weatherurl = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks,AK,3166-2:US,&units=imperial&APPID=77afa667ff8babd83fe8b450d3d5dfb8';


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


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
  
  apiFetch();

// function to capitialize first letter of a word. 
function capitalize(str) {return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

//   function displayResults(weatherData)
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capitalize(desc));
    captionDesc.textContent = capitalize(desc);
  }
  