/**
 * Created by vadimdez on 24/01/16.
 */
import Main from './components/Main';
import React from 'react';
import {render} from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

const renderer = () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app'));
};

renderer();