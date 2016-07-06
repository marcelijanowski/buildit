import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

export const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOW_WEATHER:
      return Object.assign({}, action.data);
  }
  return state;
}

export const fiveDaysWeather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIVE_DAYS_WEATHER:
      return setWeatherInfo(state, action)
  }
  return state;
}

function setWeatherInfo(state, action) {
  const { data } = action;
  return [ ...state, ...data ];
}
