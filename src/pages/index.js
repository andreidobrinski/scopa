import React, { useReducer } from 'react'
import CardValue from '../components/CardValue'
import Layout from '../components/layout'
import SEO from '../components/seo'

const initialState = {
  seven: 0,
  six: 0,
  ace: 0,
  five: 0,
  four: 0,
  three: 0,
  two: 0,
  face: 0,
}

const primieraValues = {
  seven: 21,
  six: 18,
  ace: 16,
  five: 15,
  four: 14,
  three: 13,
  two: 12,
  face: 10,
}

const reducer = (state, action) => {
  if (state[action.card] === action.value) {
    return { ...state, [action.card]: 0 }
  }
  return { ...state, [action.card]: action.value }
}

const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const total = Object.values(state).reduce((acc, current, index) => {
    return acc + current * Object.values(primieraValues)[index]
  }, 0)

  return (
    <Layout>
      <SEO title="Home" />
      {Object.keys(initialState).map(card => (
        <CardValue card={card} dispatch={dispatch} state={state} key={card} />
      ))}
      <p>Total: {total}</p>
    </Layout>
  )
}

export default IndexPage
