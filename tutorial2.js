import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudRain, faCloud, faSun, faWind} from '@fortawesome-free-solid-svg-icons';

export default function WeatherIcon({weatherType}){
  switch(weatherType){
    case 'faCloudRain':
      return ( <FontAwesomeIcon icon ={faCloudRain}/>
      );
    case 'cloudy':
      return ( <FontAwesomeIcon icon ={faCloud} className="WeatherIcon" size="6x"/>
    );
    default:
      return <div>{weatherType}</div>
  }
  return(
    //<div>{weatherType}</div>
    <FontAwesomeIcon icon ={faCloudRain};
  )
}
