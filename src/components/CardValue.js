import React from 'react'
import styled from 'styled-components'
import { buttonValues, primieraValues } from './constants'

const CardValue = ({ card, dispatch, state }) => (
  <ListItem>
    <h4 style={{ textTransform: 'capitalize', minWidth: '64px', textAlign: 'end' }}>{card}</h4>:
    {buttonValues.map(value => (
      <Button
        onClick={() => dispatch({ card, value })}
        selected={state[card] === value}
        aria-pressed={state[card] === value}
        key={`${card}-${value}`}
        aria-label={`select ${value} cards of ${card}`}
      >
        {value}
      </Button>
    ))}
    {state[card] > 0 && (
      <span style={{ color: 'rgba(0,0,0,0.7)' }} aria-label={`total for ${card}s`}>
        ({state[card] * primieraValues[card]})
      </span>
    )}
  </ListItem>
)

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  background-color: ${({ selected }) => (selected ? '#3969E3' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : '#3969E3')};
  transition: color 500ms, background-color 500ms;
  border: 1px solid #3969e3;
  margin: 8px;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`

const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`

export default CardValue
