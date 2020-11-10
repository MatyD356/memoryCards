import React from 'react'
import ReactDOM from 'react-dom'
import Footer from '../components/Header';

it('renders Footer wihout crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div)
});
