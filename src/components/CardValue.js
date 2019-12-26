import React from 'react'

const buttonValues = [4, 3, 2, 1]

const Button = ({ onClick, value, selected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ background: selected ? 'blue' : 'transparent' }}
    >
      {value}
    </button>
  )
}

const CardValue = ({ card, dispatch, state }) => {
  return (
    <div>
      {card}:
      {buttonValues.map(value => {
        return (
          <Button
            onClick={() => dispatch({ card, value })}
            value={value}
            selected={state[card] === value}
            key={value}
          />
        )
      })}
    </div>
  )
}

export default CardValue
