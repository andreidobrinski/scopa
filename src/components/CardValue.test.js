import React from 'react'
import { render } from '@testing-library/react'
import CardValue from './CardValue'
import { initialState } from './constants';

describe('The CardValue component ', () => {
  test('renders no total on initial load', () => {
    const { queryByLabelText } = render(<CardValue card="seven" state={initialState} />)
    const total = queryByLabelText(/total/)
    expect(total).toBeNull()
  })

  test('renders a total on when value is selected', () => {
    const state = {
      ...initialState,
      seven: 2
    }
    const { queryByLabelText } = render(<CardValue card="seven" state={state} />)
    const total = queryByLabelText(/total/)
    expect(total).toBeInTheDocument()
  })

  test('renders a selected button to be pressed', () => {
    const state = {
      ...initialState,
      seven: 2
    }
    const { getByRole } = render(<CardValue card="seven" state={state} />)
    const twoButton = getByRole('button', { name: /2/ })
    expect(twoButton.getAttribute('aria-pressed')).toBe("true")
  })

  test('renders correct total for sevens when two are selected', () => {
    const state = {
      ...initialState,
      seven: 2
    }
    const { getByText } = render(<CardValue card="seven" state={state} />)
    // 42 = two sevens (2 * 21)
    const total = getByText("(42)")
    expect(total).toBeInTheDocument();
  })
})
