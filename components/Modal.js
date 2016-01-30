/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text"
               ref={node => {
                this.nameNode = node;
               }}/>
        <label>Ingridients</label>
        <input type="text"
               ref={node => {
                this.ingridientsNode = node;
               }} />
        <button onClick={() => {
          this.props.save(this.nameNode.value, this.ingridientsNode.value);
          this.nameNode.value = '';
          this.ingridientsNode.value = '';
        }}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default Modal;
