import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header';

it('renders Header wihout crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div)
});
