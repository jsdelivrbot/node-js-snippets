import React from 'react';
import ReactDOM  from 'react-dom';

var $ = require('jquery');
require('jquery-ui');
 
// or load just the modules you need 
require('jquery-ui/draggable');
require('jquery-ui/droppable');

class Pane extends React.Component {
  render(){
    const paneStyle = {
      border: '1px solid black',
      width: '100%',      
      height: this.props.height
    };
    
    return (
      <div id={this.props.id} 
        style={paneStyle}>PANE</div>
    );
  }
}

class DragBar extends React.Component{
  componentDidMount(){
    $( `#${this.props.id}`).draggable({ 
      axis: "y",
      start: this.props.dragStart,
      drag: () => {
        let position = $( `#${this.props.id}`).position();
        this.props.dragging(position);
      },
      stop: () => {
        let position = $( `#${this.props.id}`).position();
        this.props.dragStop(position);
      }
    });  
  }
  
  render(){
    const dragBarStyle = { 
      width: '100%',  
      height: 5,
      background: 'gray',
      position: 'absolute',
      top: this.props.top
    };
    return (
      <div id={this.props.id} style={dragBarStyle}></div>
    );
  }
}

class Container extends React.Component {
  
  constructor(props){
    super(props);
    
   let height = $(window).height() - 50;    

    this.state = {
      height: height,
      dragBar: {
        id: 'drag-bar',
        top: height/2
      },
      pane1: {
        id: 'pane-1',
        height: height/2 - 5
      },
      pane2: {
        id: 'pane-2',
        height: height/2 + 5
      }  
    };   
  }
  
  resize = (dragPosition) => {
    let height1 = dragPosition.top;
    let height2 = this.state.height - dragPosition.top;
    
    console.log('resize:', dragPosition, height1, height2);
    
    this.setState({
      dragBar: {
        id: 'drag-bar',
        top: height1
      },
      pane1: {
        id: this.state.pane1.id,
        height: height1 - 5
      },
      pane2: {
        id: this.state.pane2.id,
        height: height2 + 5
      }  
    });        
  }
  
  logPositions = () => {
    let pane1 = $(`#${this.state.pane1.id}`);
    let pane2 = $(`#${this.state.pane2.id}`);
    let dragBar = $(`#${this.state.dragBar.id}`);
    
    console.log('logPositions:', pane1.height(), pane2.position().top, dragBar.position().top);
    console.log(this.state);
  }
  
  componentDidMount(){
    console.log('componentDidMount');
    this.logPositions();
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate');
    this.logPositions();
  }
  
  render(){    
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
    
    
    return (
      <div style={containerStyle}>
        <Pane id={this.state.pane1.id} height={this.state.pane1.height}/>
        <DragBar 
          id={this.state.dragBar.id}
          top={this.state.dragBar.top}
          dragStart={this.logPositions}
          dragging={this.resize}
          dragStop={this.logPositions}
        />
        <Pane id={this.state.pane2.id} height={this.state.pane2.height}/>
      </div>
    );
  }
}


ReactDOM.render(<Container/>, document.getElementById('react'));