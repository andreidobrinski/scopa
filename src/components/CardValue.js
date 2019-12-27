import React from 'react'
import styled from 'styled-components'
import { buttonValues } from './constants'

const CardValue = ({ card, dispatch, state }) => (
  <div>
    <span style={{ textTransform: 'capitalize', width: '100px' }}>{card}</span>:
    {buttonValues.map(value => {
      return (
        <Button
          onClick={() => dispatch({ card, value })}
          selected={state[card] === value}
          key={value}
        >
          {value}
        </Button>
      )
    })}
  </div>
)

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  background-color: ${({ selected }) => (selected ? '#7511C9' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : '#7511C9')};
  transition: color 500ms, background-color 500ms;
  border: 1px solid #7511c9;
  margin: 8px;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
`

export default CardValue
