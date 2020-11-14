import React from 'react'
import { render } from '@testing-library/react'
import Main from '../components/Main';

it('renders Main wihout crash', () => {
  const container = render(<Main />)
  const main = container.getByLabelText('main')
  expect(main).toBeInTheDocument()
});
