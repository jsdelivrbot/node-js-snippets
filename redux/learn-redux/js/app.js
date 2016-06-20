import { createStore, combineReducers } from './redux';
import { todo, todos, visibilityFilter, todoApp } from './reducers';

console.log('test');

let state = {};

console.log(todo(state, {
  id: 1,
  text: 'test todo',
  type: 'ADD_TODO'
}));

let state2 = todos(state, {
  id: 1,
  text: 'test todo',
  type: 'ADD_TODO'
});

console.log(state2, {
  id: 2,
  text: 'test todo',
  type: 'ADD_TODO'
});