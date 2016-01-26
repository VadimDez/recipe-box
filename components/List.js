/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import Reciepe from './Reciepe';

class List extends React.Component {

  render() {
    var reciepes = [];

    this.props.recipes.forEach(function (recipe, k) {
      reciepes.push(<Reciepe
        remove={this.props.remove.bind(this, k)}
        edit={this.props.edit.bind(this, k)}
        recipe={recipe} key={k} />);
    }.bind(this));

    return (
      <div>
        {reciepes}
      </div>
    )
  }
}

export default List;