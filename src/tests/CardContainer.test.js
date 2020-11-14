import React from 'react'
import { render } from '@testing-library/react';
import CardContainer from '../components/CardContainer'

it('renders CardContainer', () => {
  const container = render(<CardContainer />)
  const cardContainer = container.getByLabelText('card-container')
  expect(cardContainer).toBeInTheDocument()
})