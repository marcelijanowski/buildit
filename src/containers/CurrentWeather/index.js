import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ICON_URL } from '../../constants/url';

const Weather = ({ currentWeather }) => {
  return (
    <div>
      {currentWeather.main &&
        <div style={{borderBottom: '1px solid #ccc', padding: 5}}>
          <h3 className="current-weather-header">Current weather:</h3>
          <img src={`${ICON_URL}${currentWeather.weather[0].icon}.png`} style={{width:100, height: 100}} />
          <p>Current Temperature: {currentWeather.main.temp} C</p>
          <p>Min temperature: {currentWeather.main.temp_min} C</p>
          <p>Max temperature: {currentWeather.main.temp_max} C</p>
        </div>
      }
    </div>
  );
}

Weather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentWeather: state.currentWeather
});

export default connect(mapStateToProps)(Weather);
