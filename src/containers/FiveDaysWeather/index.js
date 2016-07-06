import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ICON_URL } from '../../constants/url';
import DailyWeather from '../../components/DailyWeather';

const Weather = ({ fiveDaysWeather }) => {
  return (
    <div>
      {fiveDaysWeather &&
        <section>
          <h4>Next days</h4>
          {fiveDaysWeather.map((item, key) =>
            <DailyWeather key={key} item={item} />
          )}
        </section>
      }
    </div>
  );
}


const mapStateToProps = state => ({
  fiveDaysWeather: state.fiveDaysWeather
});

export default connect(mapStateToProps)(Weather);
