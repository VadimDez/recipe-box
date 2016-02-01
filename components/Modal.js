/**
 * Created by vadimdez on 25/01/16.
 */

import React from 'react';

let Modal = ({save, text}) => {
  let nameNode;
  let ingridientsNode;

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        ref={node => {
          nameNode = node;
        }}/>
      <label>Ingridients</label>
      <input
        type="text"
        ref={node => {
          ingridientsNode = node;
        }} />
      <button onClick={() => {
        save(nameNode.value, ingridientsNode.value);
        nameNode.value = '';
        ingridientsNode.value = '';
      }}>
        { text }
      </button>
    </div>
  )
};

export default Modal;
