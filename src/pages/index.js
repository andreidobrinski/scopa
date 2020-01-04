import React, { useReducer } from 'react'
import CardValue from '../components/CardValue'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { initialState, primieraValues } from '../components/constants'

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
      <SEO />
      <p>How many of each card do you have?</p>
      {Object.keys(initialState).map(card => (
        <CardValue card={card} dispatch={dispatch} state={state} key={card} />
      ))}
      <p style={{ marginTop: '16px' }}>
        Total: <strong>{total}</strong> points
      </p>
    </Layout>
  )
}

export default IndexPage
