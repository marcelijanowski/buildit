import React, { PropTypes } from 'react';
import { ICON_URL } from '../../constants/url';

const DailyWeather = ({item}) => {
  return (
    <div style={{float: 'left', padding: 20, border: '1px solid #ccc', width: 90, margin: 2 }}>
      <h3>{item.dt_txt}</h3>
      <img src={`${ICON_URL}${item.weather[0].icon}.png`}/>
      <p><strong>Temperature:</strong> {item.main.temp} C</p>
      <p><strong>Min temperature:</strong> {item.main.temp_min} C</p>
      <p><strong>Max temperature:</strong> {item.main.temp_max} C</p>
    </div>
  );
};


export default DailyWeather;
