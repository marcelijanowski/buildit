import * as actionTypes from '../constants/actionTypes';
import { APP_ID } from '../constants/auth';
import { BASE_URL } from '../constants/url';

export function fetchFiveDayWeather(cityName) {
  return function (dispatch) {
    fetch(`${BASE_URL}forecast?q=${cityName}&appid=${APP_ID}&mode=json&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNowWeather(data.list[0]));
        dispatch(setFiveDaysWeather(data.list.slice(1)));
      });
  };
}

const setNowWeather = data => ({
  type: actionTypes.SET_NOW_WEATHER,
  data
});

const setFiveDaysWeather = data => ({
    type: actionTypes.SET_FIVE_DAYS_WEATHER,
    data
});
