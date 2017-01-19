import React from 'react'
import ReactDOM from 'react-dom'

import Quote from './quote'

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
    // fetch(`/graphql?query={
    //   allQuotes {
    //     id,
    //     text,
    //     author
    //   }
    // }`)
    // .then(response => response.json())
    // .then(json => this.setState(json.data))
    // .catch(ex => console.error(ex))
  }

  render () {
    return (
      <div className='quotes-list'>
        {this.state.allQuotes.map(quote => <Quote key={quote.id} quote={quote} />)}
      </div>
    )
  }
}

ReactDOM.render(<QuotesLibrary />, document.getElementById('react'))
