/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import List from './List';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {recipes: []};
  }

  componentWillMount() {
    this.setState({
      recipes: localStorage.getItem('recipes') || [{name: 'test', ingridients: 'test, test'}]
    });
  }

  render() {
    return (
      <List recipes={this.state.recipes} />
    )
  }
}

export default Main;