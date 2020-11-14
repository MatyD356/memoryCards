import React from 'react'
import ReactDOM from 'react-dom'
import Scores from '../components/Scores'

it('renders Scores wihout crasing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Scores />, div)
})