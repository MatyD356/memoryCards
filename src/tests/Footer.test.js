import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../components/Footer';

it('renders Footer wihout crash', () => {
  const container = render(<Footer />)
  const footer = container.getByLabelText('footer')
  expect(footer).toBeInTheDocument()
});
