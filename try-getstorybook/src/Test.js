import React from 'react'
import './test.css'

export default class extends React.Component{
  test1 = 10
  render(){
    return <div className='test'>{this.test1}</div>
  }
}