import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main';

it('renders Main wihout crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div)
});
