import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App';

it('renders App wihout crash', () => {
  const container = render(<App />)
  const app = container.getByLabelText('app')
  expect(app).toBeInTheDocument()
})
