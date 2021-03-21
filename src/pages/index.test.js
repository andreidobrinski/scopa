import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index';

describe('The index page ', () => {
  test('renders without crashing', () => {
    render(<IndexPage />)
  })
})
