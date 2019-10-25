import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCloud, faSun, faCloudRain, faSmog} from '@fortawesome/free-solid-svg-icons'

export default function WeatherIcon({weatherType}){
  console.log('look here', weatherType)
  switch (weatherType){
    case "Clear":
      return (
        <FontAwesomeIcon
          icon={faSun}
          className = "WeatherIcon"
          size="10x"
        />
      )

    case "Rain":
      return (
        <FontAwesomeIcon
          icon={faCloudRain}
          className = "WeatherIcon"
          size="10x"
        />
      )
    case "Clouds":
      return (
          <FontAwesomeIcon
          icon={faCloud}
          className = "WeatherIcon"
          size="10x"
          />
      )
    case "Mist":
      return (
          <FontAwesomeIcon
          icon={faSmog}
          className = "WeatherIcon"
          size="10x"
          />
      )
    default:
      return (
          <FontAwesomeIcon
          icon={faSun}
          className = "WeatherIcon"
          size="10x"
          />
      )
  }
}
