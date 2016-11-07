import React from 'react'
import css from 'next/css'

export default () => <p className={style}>Hi there!</p>

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
})