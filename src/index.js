import SC from 'soundcloud';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Weather from './components/Weather';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.fetchFiveDayWeather('London'));

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Weather} />
        <Route path="/" component={Weather} />
      </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
