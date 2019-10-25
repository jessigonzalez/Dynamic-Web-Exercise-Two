import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../App.css';
import WeatherIcon from '../../components/WeatherIcon/index.js';
import PageWrapper from '../../components/PageWrapper/index.js';

const apiKey = '3d2204265a388f489c0c0be84b54f0f8';

export default function Home(props){
  console.log('this is my prop:',props);
  const [error,isError] = useState(false)
  const[errorMessage, setErrorMessage] = useState('')
  const [success, isSuccess] = useState(false)

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherType, setWeatherType] = useState(0);
  const [cloudy,setCloudy] = useState('');

  function queryWeatherAPI(queryCity){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
    .then(function(response){
      console.log('response', response);
      if(response.status !== 200){
        isError(true);
        setErrorMessage(`${response.status}: ${'Error'}`);
      }
      else{
        isSuccess(true)
      }
      setWeather(response);
      return response;
    })

    .catch(function(error){
      console.log('error', error);
      return error;
    });
  }

useEffect(() => {
  const urlParams = new URLSearchParams(props.location.search)
  console.log(urlParams)
  const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';
  setCity(cityParam);
  queryWeatherAPI(cityParam);
},[]);

  console.log('weather', weather);

  useEffect(() => {
    let getWeatherType = weather.weather ? weather.weather[0].main : '';
    let getCloudy = weather.clouds ? weather.clouds.all : 0;
    setWeatherType(getWeatherType)
    setCloudy(getCloudy)
  }, [weatherType]);

  var weatherDispType = weather.data ? weather.data.weather[0].main : '';
  var cloudyAmount = weather.data ? weather.data.clouds.all : 0;

  return(
    <PageWrapper cloudy={cloudyAmount}>
    <div className = "App">
      <div className="WeatherNav">
        <a className={`WeatherNav__Item ${city === 'Seoul' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Seoul">Seoul</a>
        <a className={`WeatherNav__Item ${city === 'London' ? 'WeatherNav__Item--active' : ''}`} href="/?city=London">London</a>
        <a className={`WeatherNav__Item ${city === 'Miami' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Miami">Miami</a>
        <a className={`WeatherNav__Item ${city === 'Chicago' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Chicago">Chicago</a>
      </div>

      <h1> Weather in: <span>{city}</span></h1>

      <p>Weather Type: {weather.data ? weather.data.weather[0].main : ''}</p>
      <p>Current Temp: {weather.data && weather.data.main.temp}</p>
      <p>High Temp: {weather.data && weather.data.main.temp_max}</p>
      <p>Low Temp: {weather.data && weather.data.main.temp_min}</p>
      <p>Cloudiness: {weather.data && weather.data.clouds.all}</p>
      <p>Humidity: {weather.data && weather.data.main.humidity}</p>
      <p>Wind Speed: {weather.data && weather.data.wind.speed}</p>

      <WeatherIcon style="WeatherIcon" weatherType={weatherDispType}/>
    </div>
    </PageWrapper>
  );

}
