import React, { useState } from 'react';
import Countries from './json/countries.json';
import Weather from './json/Weather';




function App() {

  const API_KEY = "cd0f9b4c3715ab8cd877029ae54e2ee5";
  const [weatherData, setWeatherData] = useState([{}])
  const [country, setCountry] = useState("")
  const [error, setError] = useState({})

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=3937afcd923373a4cd1f0f8d44183933&q=${country}`).then(
      Response => Response.json()
    ).then(
      data => {
        if (data.cod === '404') {
          setError(data)
          setWeatherData({})
        } else {
          setWeatherData(data)
          setError({})

        }
      }
    ).catch(
      err => {
        setError(err)
      })
  }

  const handleChange = (ev) => {
    setCountry(ev.target.value)
  }
  console.log(error, 'weatherData ')
  return (
    <div className='app'>
      <select onChange={handleChange}>

        {Countries.map(i => <option key={i.name} value={i.name}>
          {i.name}
        </option>)}
      </select>
      <button className='glow-on-hover'onClick={getWeather}>Search</button>
      <Weather weatherData={weatherData} />
      {Object.keys(error).length > 0 ? "No data" : null}
    </div>
  );
}

export default App;








