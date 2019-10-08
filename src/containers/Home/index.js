import React, {useEffect, useState} from 'react';
import axios from 'axios';

import '../../App.css';

const apiKey = '7d380f92edb71a3d8bdefb6c45ccf3c3';

export default function Home(props){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [cloudy,setCloudy] = useState(0);

  function queryWeatherAPI(queryCity){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
    .then(function(response){
      console.log('response', response);
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
  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search)
    const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';

    setCity(cityParam);
    //const query = `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&APPID=${apiKey}`
    //axios.get(query).then(response => apiCallback(response));
    queryWeatherAPI(cityParam);

  });

  /*useEffect(() => {
  }, [weather]);*/
  /*useEffect(() => {
    let getWeatherType = weather.weather ? weather.weather[0].main : '';
    let getCloudy = weather.clouds ? weather.clouds.all : 0;
    setWeatherType(getWeatherType)
    setCloudy(getCloudy)
  }, [weather]);
*/
  console.log('weather', weather);

  return(
    /*
    <div>
      <h1>Weather in {city}</h1>
      <p>Humidity: {weather.data && weather.data.main.humidity}</p>
    </div>
    */
    <div className="WeatherNav">
      <a className={`WeatherNav__Item ${city =='Seoul' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Seoul">Seoul</a>
      <a className={`WeatherNav__Item ${city =='London' ? 'WeatherNav__Item--active' : ''}`} href="/?city=London">London</a>
      <a className={`WeatherNav__Item ${city =='Miami' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Miami">Miami</a>
      <a className={`WeatherNav__Item ${city =='Chicago' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Chicago">Chicago</a>
    </div>
  );
}

/*<a className={`WeatherNav__Item`} href="/?city=Seoul">Seoul</a>*/
/*<p>Humidity: {weather.main && weather.main.humidity}</p>*/

/*
useEffect(() => {
}, [weather]);
*/

//<PageWrapper cloudy={cloudy}>
//import '../../../components/PageWrapper/index.js';
