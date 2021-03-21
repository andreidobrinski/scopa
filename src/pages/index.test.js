import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IndexPage from './index';

const setupApp = () => render(<IndexPage />)

describe('The index page ', () => {
  test('renders without crashing', () => {
    setupApp()
  })

  test('clicking a button changes its aria-pressed value', () => {
    const { getByLabelText } = setupApp()
    const threeSevensButton = getByLabelText(/select 3 cards of seven/)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('false')

    userEvent.click(threeSevensButton)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('true')
  })

  test('clicking a button in the same row disables an already-clicked button', () => {
    const { getByLabelText } = setupApp()
    const threeSevensButton = getByLabelText(/select 3 cards of seven/)
    const fourSevensButton = getByLabelText(/select 4 cards of seven/)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('false')
    expect(fourSevensButton.getAttribute('aria-pressed')).toBe('false')

    userEvent.click(threeSevensButton)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('true')
    expect(fourSevensButton.getAttribute('aria-pressed')).toBe('false')

    userEvent.click(fourSevensButton)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('false')
    expect(fourSevensButton.getAttribute('aria-pressed')).toBe('true')
  })

  test('clicking a button twice removes its total', () => {
    const { getByLabelText, queryByLabelText } = setupApp()
    const threeSevensButton = getByLabelText(/select 3 cards of seven/)
    const sevensTotal = queryByLabelText(/total for sevens/)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('false')
    expect(sevensTotal).toBeNull()

    userEvent.click(threeSevensButton)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('true')
    expect(queryByLabelText(/total for sevens/)).toBeInTheDocument()

    userEvent.click(threeSevensButton)

    expect(threeSevensButton.getAttribute('aria-pressed')).toBe('false')
    expect(queryByLabelText(/total for sevens/)).toBeNull()
  })

  test('clicking a button changes local total', () => {
    const { getByLabelText } = setupApp()
    const threeSevensButton = getByLabelText(/select 3 cards of seven/)
    
    userEvent.click(threeSevensButton)

    const localTotal = getByLabelText(/total for sevens/)

    expect(localTotal).toHaveTextContent('63') // 3 * 21 = 63
  })

  test('clicking a button changes global total', () => {
    const { getByLabelText, getAllByText } = setupApp()
    const threeSevensButton = getByLabelText(/select 3 cards of seven/)
    const globalTotal = getAllByText(/total:/i)

    userEvent.click(threeSevensButton)

    expect(globalTotal[0]).toHaveTextContent('Total: 63') // 3 * 21 = 63
  })
})

// pressing a pressed button removes the local total (decrements global total)