import React from 'react';
import ReactDOM  from 'react-dom';

import _ from 'lodash';

var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/droppable');

let wrapped = (C) => {
  const wrappedComponent = class Pane extends React.Component {
    componentDidMount() {
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
        drop: this.props.dragNDrop
      })
    }

    render() {
      console.log('PANE', this.props);
      const paneStyle = {
        width: this.props.width,
        height: this.props.height,
        marginLeft: this.props.marginLeft
      };

      return (
        <div id={this.props.id} ref="pane" style={paneStyle}>
          <C width={this.props.width} height={this.props.height}/>
        </div>
      );
    }
  };
  return wrappedComponent;
};

let C1_ = class extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  onClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log('C1_', this.props, this.state);
    const c1Style = {
      height: this.props.height,
      width: this.props.width,
      background: '#086A87'
    };
    return (<div onClick={this.onClick} style={c1Style}>C1 {this.state.count}</div>);
  }
}

let C2_ = class extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  onClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log('C2_', this.props, this.state);
    const style = {
      height: this.props.height,
      width: this.props.width,
      background: '#8A2908'
    };
    return (<div onClick={this.onClick} style={style}>C2 {this.state.count}</div>);
  }
}

let C1 = wrapped(C1_);
let C2 = wrapped(C2_);
let C3 = wrapped(({height, width}) => <div style={{ height: height, width: width, background: '#0B6121' }}>C3</div>);

class DragBar extends React.Component {
  componentDidMount() {
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

  render() {
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

  constructor(props) {
    super(props);

    let height = $(window).height() - 50;
    let width = $(window).width() - 50;
    
    this.state = {
      height: height,
      width: width,
      panes: [
        <C1 id="c1"
          height={height}
          width={width / 2}
          marginLeft={0}
          dragNDrop={this.dragNDrop}/>,
        <C2 id="c2" 
          height={height / 2}
          width={width / 2}
          marginLeft={0}
          dragNDrop={this.dragNDrop}/>,
        <C3 id="c3" 
          height={height / 2}
          width={width / 2}
          marginLeft={0}
          dragNDrop={this.dragNDrop}/>
      ],
      vDragBar: {
        top: 8,
        left: width / 2 + 10,
        height: height,
        width: 5,
        axis: 'x'
      },
      hDragBar: {
        top: height / 2 + 4,
        height: 6,
        width: width / 2,
        axis: 'y'
      }
    };
  }

  hResize = (dragPosition) => {
    const { height, width, panes, vDragBar} = this.state;
    const height1 = dragPosition.top;
    const height2 = this.state.height - dragPosition.top;

    let newPane1Props = _.cloneDeep(panes[1].props);
    newPane1Props.height = height1-3;
    let newPane2Props = _.cloneDeep(panes[2].props);
    newPane2Props.height = height2 + 3;
       
    this.setState({
      panes: [
      this.state.panes[0],
      <C2 {...newPane1Props}/>,
      <C3 {...newPane2Props}/>
    ],
      vDragBar: vDragBar,
      hDragBar: {
        top: height1 + 4,
        height: 6,
        width: this.state.hDragBar.width
      }
    });
  }

  vResize = (dragPosition) => {
    const { height, width, panes, vDragBar, hDragBar } = this.state;
    let width1 = dragPosition.left - 5;
    let width2 = width - dragPosition.left;

    let newProps = _.map(panes, pane =>  _.cloneDeep(pane.props));
    newProps[0].width = width1;
    newProps[1].width = width2;
    newProps[2].width = width2;

    this.setState({
      panes: [
        <C1 {...newProps[0]}/>,
        <C2 {...newProps[1]}/>,
        <C3 {...newProps[2]}/>
      ],
      vDragBar: vDragBar,
      hDragBar: {
        top: this.state.hDragBar.top,
        height: 5,
        width: width2
      }
    });
  }
  
  dragNDrop = (dropped, dragged) => {
    let droppedId = dropped.target.id;
    let draggedId = dragged.draggable.context.id;
    console.log('dropped: ', droppedId);
    console.log('dragged: ', draggedId);
    console.log(this.state.panes[0].props);
    let droppedIdx = _.findIndex(this.state.panes, (pane) => {
      return pane.props.id === droppedId;       
    });
    
    let draggedIdx = _.findIndex(this.state.panes, (pane) => {
      return pane.props.id === draggedId;       
    });
    
    console.log(draggedIdx, droppedIdx);
    
    let newArray = 
    this.setState({
      
    });
  }

  logState = () => {
    console.log(this.state);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.logState();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    this.logState();
  }

  render() {
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
        {this.state.panes[0]}
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
          {this.state.panes[1]}
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
          {this.state.panes[2]}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Container/>, document.getElementById('react'));