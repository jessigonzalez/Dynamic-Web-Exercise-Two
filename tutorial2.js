import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudRain} from '@fortawesome-free-solid-svg-icons';

export default function WeatherIcon({weatherType}){
  return(
    <div>{weatherType}</div>
    <FontAwesomeIcon icon ={faCloudRain};
  )
}
