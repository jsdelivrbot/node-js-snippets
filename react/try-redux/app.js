import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore } from 'redux';

let store = createStore(counter);

let C = (props) => {
  return <div>{props.value}</div>;
};

function render(value){
  ReactDOM.render(<C value={value}/>, document.getElementById('react'));  
}

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state;
  }
}

store.subscribe(() => {
  let value = store.getState();
  render(value);
});

setInterval(() => {
  store.dispatch({ type: 'INCREMENT' });  
}, 1000);