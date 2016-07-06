import { it, describe } from 'mocha';

import { currentWeather,  fiveDaysWeather} from './index';

describe('Weather reducer', () => {
  it('should retrun initialState when action is not known for currentWeather', () => {
    expect(currentWeather([], 'UNKNOWN_ACTION')).to.eql([]);
  });

  it('should retrun initialState when action is not known for fiveDaysWeather', () => {
    expect(fiveDaysWeather([], 'UNKNOWN_ACTION')).to.eql([]);
  });

  it('should ad new item for currentWeather when action is known', () => {
    expect(currentWeather({test: 'test'}, 'SET_NOW_WEATHER')).to.eql({test: 'test'});
  });

  it('should ad new item for fiveDaysWeather when action is known', () => {
    expect(currentWeather({test: 'test'}, 'SET_FIVE_DAYS_WEATHER')).to.eql({test: 'test'});
  });
});
