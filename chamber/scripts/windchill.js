

// Get HTML Info **********************************************
const windChill = parseFloat(document.querySelector('#windChillSpan'))
const temp = parseFloat(document.querySelector('#tempSpan').textContent)
const windSpeed = parseFloat(document.querySelector('#windSpeedSpan').textContent)

// Screen to make sure there is measurable wind chill *********
if(temp <= 50.0 && windSpeed >= 3.0){
    const currWindChillFahr = windChillFahr(temp, windSpeed)
    document.querySelector('#windChillSpan').innerHTML = currWindChillFahr
}
else{
    document.querySelector('#windChillSpan').innerHTML = 'N/A'
}

// Wind Chill function ****************************************
function windChillFahr(temp, windSpeed){
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)
    windChill = windChill.toFixed(2)
    return windChill
}
