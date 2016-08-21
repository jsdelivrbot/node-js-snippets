import React from 'react';
import ReactDOM from 'react-dom';

var ReactGridLayout = require('react-grid-layout');

import './node_modules/react-grid-layout/css/styles.css';
import './node_modules/react-resizable/css/styles.css';

class Panel extends React.Component{
  render(){
    return (
      <div>TEST</div>
    );
  }
}

var MyFirstGrid = React.createClass({
  render: function() {
    let width = window.innerWidth;
    let height = window.innerHeight - 150;
    let rowHeight = height / 13;

    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 6, h: 6},
      {i: 'b', x: 6, y: 0, w: 6, h: 6},
      {i: 'c', x: 0, y: 6, w: 6, h: 6},
      {i: 'd', x: 6, y: 6, w: 6, h: 6},
      {i: 'bottom', x: 0, y: 12, w: 12, h: 1, static: true},
    ];

    let divStyle = {
      border: '1px solid black'
    }

    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={rowHeight} width={width}>
        <div style={divStyle} key={'a'}>a</div>
        <div style={divStyle} key={'b'}>b</div>
        <div style={divStyle} key={'c'}>c</div>
        <div style={divStyle} key={'d'}>d</div>
        <div style={divStyle} key={'bottom'}>bottom</div>
      </ReactGridLayout>
    )
  }
});

ReactDOM.render(<MyFirstGrid/>, document.getElementById('react'));
