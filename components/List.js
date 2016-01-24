/**
 * Created by vadimdez on 24/01/16.
 */

import React from 'react';
import Reciepe from './Reciepe';

class List extends React.Component {
  render() {
    var reciepes = [];

    this.props.recipes.forEach(function (recipe, id) {
      reciepes.push(<Reciepe recipe={recipe} key={id} />);
    });

    return (
      <div>
        {reciepes}
      </div>
    )
  }
}

export default List;