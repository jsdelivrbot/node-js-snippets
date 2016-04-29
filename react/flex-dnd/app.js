import React from 'react';
import ReactDOM  from 'react-dom';

var $ = require('jquery');
require('jquery-ui');
require('jquery-ui/draggable');
require('jquery-ui/droppable');



let wrapped = C => {
  return class Pane extends React.Component {      
    componentDidMount(){
      let elem = $(this.refs['pane']);
      elem.draggable({       
        revert: true,
        snap: true,
        drag: () => {
          let position = elem.position();
          console.log(position);
        }
      });  
    }
    
    render(){
      console.log('PANE', this.props);
      const paneStyle = {            
        width: this.props.width,      
        height: this.props.height,
        marginLeft: this.props.marginLeft,
        background: this.props.color,
      };
      
      return (
        <div ref="pane" style={paneStyle}>
          <C width={this.props.width} height={this.props.height}/>
        </div>     
      );
    }
  }
};

let C1_ = class extends React.Component {  
  render(){
    console.log('C1_', this.props);  
    return (<div>C1</div>);
  }
}

let C1 = wrapped(C1_);
let C2 = wrapped(() => <div>C2</div>);
let C3 = wrapped(() => <div>C3</div>);

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
      opacity: 0.2,
      zIndex: 1000
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
  
  logState = () => {
    console.log(this.state);
  }
  
  componentDidMount(){
    console.log('componentDidMount');
    this.logState();
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate');
    this.logState();
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
        <C1 height={this.state.map.height} 
              width={this.state.map.width}
              marginLeft={0}
              color='#086A87'/>
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
          <C2 height={this.state.pane1.height} 
                width={this.state.pane1.width}
                marginLeft={0}
                color='#8A2908'/>
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
          <C3 height={this.state.pane2.height} 
                width={this.state.pane2.width}
                marginLeft={0}
                color='#0B6121'/>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Container/>, document.getElementById('react'));