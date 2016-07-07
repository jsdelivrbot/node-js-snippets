import React from 'react';
import ReactDOM  from 'react-dom';
var Rx = require('@reactivex/rxjs');

let count = Rx.Observable.interval(1000);
let num = 0;

count.subscribe(() => {
  num++;
  ReactDOM.render(<App num={num}/>, document.getElementById('react'));
})

let reset = Rx.Observable.fromEvent(document, 'click');
reset.subscribe(() => {
  num = 0;
  ReactDOM.render(<App num={num}/>, document.getElementById('react'));
});

class App extends React.Component{
  render(){
    return (
      <div>{this.props.num}</div>
    );
  }
}

