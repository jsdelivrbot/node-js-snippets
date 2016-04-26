import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './Container';

class DustbinSingleTarget extends Component {
  render() {
    return (
      <div>
        <p>
          <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/01%20Dustbin/Single%20Target'>Browse the Source</a></b>
        </p>
        <p>
          This is the simplest example there is.
        </p>
        <p>
          Drag the boxes below and drop them into the dustbin.
          Note that it has a neutral, an active and a hovered state.
          The dragged item itself changes opacity while dragged.
        </p>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<DustbinSingleTarget/>, document.getElementById('react'));