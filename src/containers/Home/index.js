import React, {useEffect, useState} from 'react';
import axios from 'axios';

import '../../App.css';
import PageWrapper from '../../components/PageWrapper/index.js'
/*import WeatherIcon from
import '../../../components/PageWrapper/index.js';
*/
const apiKey = '3d2204265a388f489c0c0be84b54f0f8';

export default function Home(props){
  const [error,isError] = useState(false)
  const[errorMessage, setErrorMessage] = useState('')

  const [success, isSuccess] = useState(false)

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [cloudy,setCloudy] = useState(0);

  function queryWeatherAPI(queryCity){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
    .then(function(response){
      // console.log('response', response);
      setWeather(response);

      return response;
    })

    .catch(function(error){
      console.log('error', error);
      return error;
    });
  }

  /*
  useEffect(() => {
    setCity('London');
    queryWeatherAPI('London');//cant be {city} bc it is not fully set yet in setCity
    console.log('weather test', queryWeatherAPI('London'));
    }, []);
  */

  function apiCallback(response){
    // console.log('response',response)
    if(response.status !== 200){
      isError(true);
      setErrorMessage(`${response.status}: ${Error}`);
    }
    else{
      isSuccess(true)
    }
    setWeather(response.data)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search)
    const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';

    setCity(cityParam);

    queryWeatherAPI(cityParam);

  },[]);
  console.log('new one', weather);

  /*useEffect(() => {
  }, [weather]);*/

/*
  useEffect(() => {
    let getWeatherType = weather.data ? weather.data.weather[0].main : '';
    let getCloudy = weather.clouds ? weather.clouds.all : 0;
    setWeather(getWeatherType)
    setCloudy(getCloudy)
  }, [weather]);
*/
  // console.log('weather', weather);



  return(
    /*
    <div>
      <h1>Weather in {city}</h1>
      <p>Humidity: {weather.data && weather.data.main.humidity}</p>
    </div>
    */
    <PageWrapper cloudy={cloudy}>
      <div className="WeatherNav">
        <a className={`WeatherNav__Item ${city =='Seoul' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Seoul">Seoul</a>
        <a className={`WeatherNav__Item ${city =='London' ? 'WeatherNav__Item--active' : ''}`} href="/?city=London">London</a>
        <a className={`WeatherNav__Item ${city =='Miami' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Miami">Miami</a>
        <a className={`WeatherNav__Item ${city =='Chicago' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Chicago">Chicago</a>
      </div>


      <h1> Weather in: <span>{city}</span></h1>

      {error && <div className = "errorMessage">{errorMessage}</div>}
      {success && <div className = "successMessage">Weather query successful!</div>}
      <p>{weather.weather ? weather.weather[0].main : ''}</p>
      <p>Current Temp: {weather.data && weather.data.main.temp}</p>
      <p>High Temp: {weather.weather}</p>
    </PageWrapper>
  );
}
/*
Weather Type (ex. Cloudy)
Current Temperature
High Temperature
Low Temperature
Cloudiness
Humidity
Wind Speed
*/

/*<p>Humidity: {weather.main && weather.main.humidity}</p>*/

/*<WeatherIcon weatherValue={weatherType}/>*/


/*
useEffect(() => {
  let getWeatherType = weather.weather ? weather.weather[0].main : '';
  let getCloudy = weather.clouds ? weather.clouds.all : 0;
  setWeatherType(getWeatherType)
  setCloudy(getCloudy)
}, [weather]);
*/


//<p>{weatherType}</p>
