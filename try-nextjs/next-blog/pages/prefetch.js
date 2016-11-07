import React from 'react'

export default class extends React.Component{
  static getInitialProps () {
    console.log('prefetch')
    return { a: 1 }
  }
  render(){
    return (
      <div>Component</div>
    )
  }
}