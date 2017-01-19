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

const QuoteRelay = Relay.createContainer(Quote, {
  fragments: {
    quote: () => Relay.QL `
      fragment OneQuote on Quote {
        text
        author
      }
    `
    // Quote component will get this.props.quote.text and this.props.quote.author
  } })

export default QuoteRelay
