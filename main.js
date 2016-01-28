/**
 * Created by vadimdez on 24/01/16.
 */
import Main from './components/Main';
import React from 'react';
import {render} from 'react-dom';
import store from './store';

const renderer = () => {
  render(<Main store={store} />, document.getElementById('app'));
};

store.subscribe(renderer);
renderer();