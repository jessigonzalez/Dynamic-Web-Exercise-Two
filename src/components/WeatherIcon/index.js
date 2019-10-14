import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { faCloud, faSun, faCloudRain} from '@fortawesome/free-solid-svg-icons'
library.add(fas,faCloud,faSun,faCloudRain);

export default function WeatherIcon(weatherDisp){
  console.log('weatherDisp Input',weatherDisp);
  var iconName = weatherDisp;
  console.log('weatherDisp Input',iconName);

  if(iconName == 'Clear'){
    return (
      <div>
        <FontAwesomeIcon icon="sun" size="6x" />
      </div>
    )
  }
  else if (iconName == 'Rain'){
    return (
      <div>
        <FontAwesomeIcon icon="cloud-rain" size="6x" />
      </div>
    )
  }
  else if (iconName == 'Clouds'){
    return (
      <div>
        <FontAwesomeIcon icon="cloud" size="6x" />
      </div>
    )
  }
  else {
    return (
      <div>
        <FontAwesomeIcon icon="cloud" size="6x" />
      </div>
    )
  }
  console.log('the icon to be shown', iconName);
}

/*
export default function WeatherIcon(weatherDisp){
  console.log('weatherDisp Input',weatherDisp);
  var iconName = weatherDisp;
  console.log('weatherDisp Input',iconName);

  switch (iconName){
    case "Clear": {
      return (
          <FontAwesomeIcon icon="sun" size="6x" />
      )
      break;
    }
    case "Rain": {
      return (
          <FontAwesomeIcon icon="cloud-rain" size="6x" />
      )
      break;
    }
    case "Clouds": {
      return (
          <FontAwesomeIcon icon="cloud" size="6x" />
      )
      break;
    }
    default: {
      return (
          <FontAwesomeIcon icon="cloud" size="6x" />
      )
      break;
    }
  }
  console.log('the icon to be shown', iconName);
}
*/

/*switch (weatherDisp){
  case weatherDisp == "Clear":
    weatherDisp = "sun";
    break;
  case weatherDisp == "Rain":
    weatherDisp = "cloud-rain";
    break;
  case weatherDisp == "Clouds":
    weatherDisp = "cloud";
    break;
  default:
    weatherDisp = "cloud";
  */

/*
var weatherDispType;
if (weatherDisp == "Clear"){
  weatherDispType = "sun";
}
if (weatherDisp == "Rain"){
  weatherDispType = "cloud-rain";
}
if (weatherDisp == "Clouds"){
  weatherDispType = "cloud";
}
else{
  weatherDispType = "sun";
}
*/
/*This is what my file looked like before*/

/*
function WeatherIcon(weatherDisp){
  console.log('weatherDisp Input',weatherDisp);
  var iconName = weatherDisp;
  var name = "";
  switch (iconName){
    case "Clear":
      name = "sun";
      break;
    case "Rain":
      name = "cloud-rain";
      break;
    case "Clouds":
      name = "cloud";
      break;
    default:
      console.log("Sorry, we are missing that icon");
  }
  console.log('the icon to be shown', name);


  return (
      <FontAwesomeIcon icon={name} size="6x" />
  );
}
export default WeatherIcon;
*/
