import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Card from '../components/Card'

it('renders Card wihout crash', () => {
  const container = render(<Card />)
  const card = container.getByLabelText('card-item')
  expect(card).toBeInTheDocument()
})

it('when props specified calls 2 functions onClick', () => {
  const remove = jest.fn();
  const add = jest.fn();
  const container = render(<Card remove={remove} addToClicked={add} />)
  const card = container.getByLabelText('card-item')
  fireEvent.click(card)
  expect(remove.mock.calls.length).toBe(1);
  expect(add.mock.calls.length).toBe(1);
})
