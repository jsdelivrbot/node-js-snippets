import Relay from 'react-relay'
import React from 'react'
import ReactDOM from 'react-dom'

import QuoteRelay from './quote'

class QuotesLibrary extends React.Component {
  state = { allQuotes: [] }

  async componentDidMount () {
    let response = await fetch(`/graphql?query={
      allQuotes {
        id,
        text,
        author
      }
    }`)

    let json = await response.json()
    this.setState(json.data)
  }

  render () {
    return (
      <div className='quotes-list'>
        {this.state.allQuotes.map(quote => <QuoteRelay key={quote.id} quote={quote} />)}
      </div>
    )
  }
}

const QuotesLibraryRelay = Relay.createContainer(QuotesLibrary, { fragments: {} })

class AppRoute extends Relay.Route {
  static routeName = 'App'
}

ReactDOM.render(<Relay.RootContainer
  Component={QuotesLibraryRelay}
  route={new AppRoute()} />, document.getElementById('react'))
