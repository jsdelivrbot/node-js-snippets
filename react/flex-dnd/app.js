import React from 'react';
import ReactDOM  from 'react-dom';

import _ from 'lodash';

var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/droppable');

let wrapped = (C) => {
  return class Pane extends React.Component {      
    componentDidMount(){
      let elem = this.refs['pane'];
      let saved_zIndex = elem.style.zIndex;
      $(elem).draggable({       
        revert: true,
        snap: true,
        start: () => {
          elem.style.zIndex = 1000;
        },
        stop: () => {
          elem.style.zIndex = saved_zIndex;
        },
        drag: () => {
          let position = $(elem).position();
          elem.style.zIndex = 1000;
          console.log(position);
        }
      });
      
      $(elem).droppable({
        drop: (e, ui) => {
          console.log(e);
          console.log(ui.draggable);
        }
      })
    }
    
    render(){
      console.log('PANE', this.props);
      const paneStyle = {            
        width: this.props.width,      
        height: this.props.height,
        marginLeft: this.props.marginLeft
      };
      
      const uniqueId = _.uniqueId('pane_');
      
      return (
        <div id={uniqueId} ref="pane" style={paneStyle}>
          <C width={this.props.width} height={this.props.height}/>
        </div>     
      );
    }
  }
};

let C1_ = class extends React.Component {  
  render(){
    console.log('C1_', this.props);
    const c1Style = {
      height: this.props.height, 
      width: this.props.width,
      background: '#086A87'
    };
    return (<div style={c1Style}>C1</div>);
  }
}

let C1 = wrapped(C1_);
let C2 = wrapped(({height, width}) => {
  console.log('C2', height, width);
  return <div style={{height: height, width: width, background: '#8A2908'}}>C2</div>
});
let C3 = wrapped(({height, width}) => <div style={{height: height, width: width, background: '#0B6121'}}>C3</div>);

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
      pane1: {        
        element: <C1 height={height} 
                      width={width/2}
                      marginLeft={0}/> 
      },
      vDragBar: {
        top: 8,
        left: width/2 + 10,
        height: height,
        width: 5,
        axis: 'x'
      },
      hDragBar: {
        top: height/2 + 4, 
        height: 6,
        width: width/2,
        axis: 'y'
      },
      pane2: {
        element: <C2 height={height/2} 
                      width={width/2}
                      marginLeft={0}/>
      },
      pane3: {
        element: <C3 height={height/2} 
                      width={width/2}
                      marginLeft={0}/>
      }  
    };   
  }
  
  hResize = (dragPosition) => {
    let { height, width } = this.state;
    let height1 = dragPosition.top;
    let height2 = this.state.height - dragPosition.top;
        
    this.setState({
      pane1: {
        element: this.state.pane1.element
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
      pane2: {
        element: <C2 height={height1 - 3} 
                      width={this.state.pane2.element.props.width}
                      marginLeft={0}/>
      },
      pane3: {
        element: <C3 height={height2 + 3} 
                      width={this.state.pane3.element.props.width}
                      marginLeft={0}/>
      }  
    });        
  }
  
  vResize = (dragPosition) => {
      let { height, width } = this.state;
      let width1 = dragPosition.left - 5;
      let width2 = width - dragPosition.left;
        
    this.setState({
      pane1: {
        element: <C1 height={this.state.pane1.element.props.height} 
                      width={width1}
                      marginLeft={0}/>
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
      pane2: {
        element: <C2 height={this.state.pane2.element.props.height} 
                      width={width2}
                      marginLeft={0}/>
      },
      pane3: {
        element: <C3 height={this.state.pane3.element.props.height} 
                      width={width2}
                      marginLeft={0}/>
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
    
    console.log(this.state);
    
    return (
      <div style={containerStyle}>
        {this.state.pane1.element}
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
          {this.state.pane2.element}
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
          {this.state.pane3.element}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Container/>, document.getElementById('react'));