import React from 'react';
import ReactDOM  from 'react-dom';
var Rx = require('@reactivex/rxjs');

let count = Rx.Observable.create((observer) => {
  observer.next(0);
});


count.subscribe((x) => {
  console.log('x:', x);
})

let num = 0;

window.increase = function(){
  num++;
}

class App extends React.Component{
  render(){
    return (
      <div>{num}</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('react'));