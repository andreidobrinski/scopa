import React from 'react'
import styled from 'styled-components'

const buttonValues = [4, 3, 2, 1]

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  background-color: ${({ selected }) =>
    selected ? 'rebeccapurple' : 'transparent'};
  color: ${({ selected }) => (selected ? 'white' : 'rebeccapurple')};
  border: 1px solid rebeccapurple;
  margin: 8px;
  border-radius: 8px;
`

const CardValue = ({ card, dispatch, state }) => {
  return (
    <div>
      {card}:
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
}

export default CardValue
