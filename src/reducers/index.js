import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {currentWeather , fiveDaysWeather} from './Weather';
export default combineReducers({
  currentWeather,
  fiveDaysWeather,
  routing: routerReducer
});
