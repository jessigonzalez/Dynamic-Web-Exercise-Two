import React, {useEffect, useState} from 'react';
import axios from 'axios';

const apiKey = 'hjflahgkljkljlkj';

export default function Home(props){
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState({});

  function queryWeatherAPI(queryCity){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}')
    .then(function(response){
      console.log('response',response);
      return response;
      })

    .catch(function(error){
      console.log('error',error);
      return error;
      })
  }

  useEffect(() => {
    setCity('London');
    setWeather({});
    console.log('weather test', queryWeatherAPI('London'));
    }, []);

  console.log('weather',weather);

  return(
    <div>
      <h1>Weather in {city}</h1>
      <p>Humidity: ???</p>
    </div>
  )

}
