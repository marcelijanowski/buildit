import currentWeather from './index';
import { shallow } from 'enzyme';

describe('DailyWeather', () => {

  const props = {
    dt_txt: '2016-01-01'
  };

  it('shows two elements', () => {
    const element = shallow(<currentWeather item={props} />);

    expect(element.find('div')).to.have.length(0);
  });

});
