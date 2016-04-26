import React from 'react';
import ReactDOM  from 'react-dom';


class C1 extends React.Component {
  drop = (e) => {
    e.preventDefault();
    console.log(`C1 drop ${e.dataTransfer.getData('text')}`);
    this.refs['c1'].style.background = 'black';
  }

  dragOver = (e) =>{
    e.preventDefault();
  }

  render(){
    const blockStyle = {
      height: 100,
      width: 200,
      border: "2px solid blue"
    };
    return (
      <div ref="c1"
          style={blockStyle}
          onDrop={this.drop}
          onDragOver={this.dragOver}></div>
    );
  }
}

class C2 extends React.Component {

  dragStart = (e) => {
    console.log('C2 drag start');

    const img = document.createElement("img");
    img.src = "http://lorempixel.com/image_output/sports-q-c-200-100-8.jpg";
    e.dataTransfer.setDragImage(img, 0, 0);
    e.dataTransfer.setData('text', 'karlkim');
  }

  dragEnd = (e) => {
    console.log('C2 drag end');
  }

  drag = (e) => {
    e.preventDefault();
  }
  render(){
    const blockStyle = {
      height: 100,
      width: 200,
      lineHeight: 200,
      background: 'red',
      border: '2px solid red',
      borderRadius: '4px'
    };
    return (
      <div ref="c2"
          style={blockStyle}
          draggable="true"
          onDrag={this.drag}
          onDragStart={this.dragStart}
          onDragEnd={this.dragEnd}/>
    );
  }
}

class Root extends React.Component {
  render(){
    const blockStyle = {
      display: 'flex',
      height: 500,
      width: 800,
      border: '1px solid black'
    };

    return (
      <div style={blockStyle}>
        <C1/>
        <C2/>
        <div style={{
            width: 170,
            height: 100,
            'lineHeight': 100,
            'textAlign': 'center',
            'borderRadius': 6,
            background: 'green',
            color: '#efe'}
        }
            draggable="true">drag me</div>
      </div>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('react'));