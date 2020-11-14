import React from 'react'
import { render } from '@testing-library/react'
import Header from '../components/Header';

it('renders Header wihout crash', () => {
  const container = render(<Header />)
  const header = container.getByLabelText('header')
  expect(header).toBeInTheDocument()
});
