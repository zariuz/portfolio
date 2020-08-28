import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'index.css';
import store from 'redux/store';

function render() {
  const App = require('./app').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', render);
}
