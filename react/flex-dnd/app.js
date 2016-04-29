import React from 'react';
import ReactDOM  from 'react-dom';

var $ = require('jquery');
require('jquery-ui');
 
// or load just the modules you need 
require('jquery-ui/draggable');
require('jquery-ui/droppable');

class Pane extends React.Component {
  componentDidMount(){
    // $( `#${this.props.id}`).draggable({       
    //   revert: true,
    //   snap: true,
    //   drag: () => {
    //     let position = $( `#${this.props.id}`).position();
    //     console.log(position);
    //   }
    // });  
  }
  
  render(){
    const paneStyle = {            
      width: this.props.width,      
      height: this.props.height,
      marginLeft: this.props.marginLeft,
      background: this.props.color,
    };
    
    return (
      <div style={paneStyle}/>
    );
  }
}

class DragBar extends React.Component{  
  componentDidMount(){
    let elem = $(this.refs['drag-bar']);
    elem
      .draggable({ 
        axis: this.props.axis,
        cursor: "move",
        start: this.props.dragStart,
        drag: () => {
          let position = elem.position();
          this.props.dragging(position);
        },
        stop: () => {
          let position = elem.position();
          this.props.dragging(position);
        }
      });  
  }
  
  mouseOver = () => {
    this.refs['drag-bar'].style.cursor = 'move';    
  }
  
  render(){
    const dragBarStyle = { 
      width: this.props.width,  
      height: this.props.height,
      background: 'gray',
      position: 'absolute',
      top: this.props.top,
      left: this.props.left,
      opacity: 0.0
    };
    return (
      <div
          ref='drag-bar'
          onMouseOver={this.mouseOver} 
          style={dragBarStyle}></div>
    );
  }
}

class Container extends React.Component {
  
  constructor(props){
    super(props);
    
   let height = $(window).height() - 50;    
   let width = $(window).width() - 50;
   
    this.state = {
      height: height,
      width: width,
      map: {
        id: 'map',
        height: height,
        width: width/2 
      },
      vDragBar: {
        id: 'v-drag-bar',
        top: 8,
        left: width/2 + 10,
        height: height,
        width: 5,
        axis: 'x'
      },
      hDragBar: {
        id: 'h-drag-bar',
        top: height/2 + 4, 
        height: 6,
        width: width/2,
        axis: 'y'
      },
      pane1: {
        id: 'pane-1',
        height: height/2,
        width: width/2
      },
      pane2: {
        id: 'pane-2',
        height: height/2,
        width: width/2
      }  
    };   
  }
  
  hResize = (dragPosition) => {
    let { height, width } = this.state;
    let height1 = dragPosition.top;
    let height2 = this.state.height - dragPosition.top;
        
    this.setState({
      map: {
        height: this.state.map.height,
        width: this.state.map.width
      },
      vDragBar: {
        top: 10,
        height: this.state.vDragBar.height,
        width: 5
      },
      hDragBar: {
        top: height1 + 4,
        height: 6,
        width: this.state.hDragBar.width
      },
      pane1: {
        height: height1 - 3,
        width: this.state.pane1.width
      },
      pane2: {
        height: height2 + 3,
        width: this.state.pane2.width
      }  
    });        
  }
  
  vResize = (dragPosition) => {
      let { height, width } = this.state;
      let width1 = dragPosition.left - 5;
      let width2 = width - dragPosition.left;
        
    this.setState({
      map: {
        height: this.state.map.height,
        width: width1
      },
      vDragBar: {
        top: 10,
        height: this.state.vDragBar.height,
        width: 5
      },
      hDragBar: {
        top: this.state.hDragBar.top,
        height: 5,
        width: width2
      },
      pane1: {
        height: this.state.pane1.height,
        width: width2      
      },
      pane2: {
        height: this.state.pane2.height,
        width: width2
      }  
    });      
  }
  
  logPositions = () => {
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
      flexDirection: 'row'
    };
    
    const rightContainerStyle = {
      display: 'flex',
      flexDirection: 'column'      
    };
    
    
    return (
      <div style={containerStyle}>
        <Pane height={this.state.map.height} 
              width={this.state.map.width}
              marginLeft={0}
              color='cyan'/>
        <DragBar 
            top={this.state.vDragBar.top}
            height={this.state.vDragBar.height}
            width={this.state.vDragBar.width}
            dragStart={this.logPositions}
            dragging={this.vResize}
            dragStop={this.logPositions}
            axis={this.state.vDragBar.axis}
            left={this.state.vDragBar.left}
        />
        <div style={rightContainerStyle}>
          <Pane height={this.state.pane1.height} 
                width={this.state.pane1.width}
                marginLeft={0}
                color='fuchsia'/>
          <DragBar 
            top={this.state.hDragBar.top}
            height={this.state.hDragBar.height}
            width={this.state.hDragBar.width}
            dragStart={this.logPositions}
            dragging={this.hResize}
            dragStop={this.logPositions}
            axis={this.state.hDragBar.axis}
            marginLeft={0}
          />
          <Pane height={this.state.pane2.height} 
                width={this.state.pane2.width}
                marginLeft={0}
                color='blue'/>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Container/>, document.getElementById('react'));