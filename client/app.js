import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// In your browser JavaScript, you can import './path/to/index.css' into a JavaScript file - webpack will then include it in the build path.
//recommend doing it in the same entry point you use for your JavaScript
import css from '../public/style.css'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
  <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app')
);
