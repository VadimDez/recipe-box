/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import Reciepe from './Reciepe';

class List extends React.Component {

  componentDidMount() {
    const store = this.context.store;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const store = this.context.store;
    var reciepes = [];

    store.getState().recipes.forEach(function (recipe, k) {
      reciepes.push(<Reciepe
        remove={this.props.remove.bind(this, k)}
        edit={this.props.edit.bind(this, k)}
        recipe={recipe} key={k} />);
    }.bind(this));

    return (
      <div>
        { reciepes }
      </div>
    )
  }
}

List.contextTypes = {
  store: React.PropTypes.object
};

export default List;