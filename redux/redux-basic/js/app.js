import React from 'react';
import ReactDOM  from 'react-dom';
import createStore from './basic-redux';
import { counter } from './reducers';

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState() }
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
      />,
    document.getElementById('react')
  );
}

const store = createStore(counter);
store.subscribe(render);
render();