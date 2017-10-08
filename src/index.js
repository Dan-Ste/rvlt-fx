import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { fetchRates } from './actions/ratesActions';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(fetchRates());

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();