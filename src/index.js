import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(AuthReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
