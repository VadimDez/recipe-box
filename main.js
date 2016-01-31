/**
 * Created by vadimdez on 24/01/16.
 */
import Main from './components/Main';
import React from 'react';
import {render} from 'react-dom';
import store from './store';

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const renderer = () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
    , document.getElementById('app'));
};

store.subscribe(renderer);
renderer();