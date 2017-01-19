import Relay from 'react-relay'
import React from 'react'

class Quote extends React.Component {
  render () {
    return (
      <blockquote>
        <p>{this.props.quote.text}</p>
        <footer>{this.props.quote.author}</footer>
      </blockquote>
    )
  }
}

const QuoteRelay = Relay.createContainer(Quote, { fragments: {} })

export default QuoteRelay
