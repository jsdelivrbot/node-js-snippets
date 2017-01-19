import Relay from 'react-relay'
import React from 'react'
import ReactDOM from 'react-dom'

import QuoteRelay from './quote'

class QuotesLibrary extends React.Component {
  render () {
    return (
      <div className='quotes-list'>
        {this.props.library.allQuotes.map(quote =>
          <QuoteRelay key={quote.id} quote={quote} />)}
      </div>
    )
  }
}

const QuotesLibraryRelay = Relay.createContainer(QuotesLibrary, {
  fragments: {
    library: () => Relay.QL `
      fragment AllQuotes on QuotesLibrary {
        allQuotes {
          id
          ${QuoteRelay.getFragment('quote')}
        }
      }
    `
    // Quote.getFragment('quote')
    // we ask Quote react component for the  quote fragment requirement
  }
})

class AppRoute extends Relay.Route {
  static routeName = 'App'
  static queries = {
    library: (Component) => Relay.QL `
      query QuotesLibrary {
        quotesLibrary {
          ${Component.getFragment('library')}
        }
      }
    `
  }
}

ReactDOM.render(<Relay.RootContainer
  Component={QuotesLibraryRelay}
  route={new AppRoute()} />, document.getElementById('react'))
