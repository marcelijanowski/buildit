import React, { PropTypes } from 'react';

import CurrentWeather from '../../containers/CurrentWeather';
import FiveDaysWeather from '../../containers/FiveDaysWeather';

const Weather = () => {
  return (
    <main>
      <CurrentWeather />
      <FiveDaysWeather />
    </main>
  );
};

export default Weather;
