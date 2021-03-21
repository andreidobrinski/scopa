import React, { useReducer } from 'react'
import CardValue from '../components/CardValue'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Total from '../components/Total'
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
      <h2>How many of each card do you have?</h2>
      <Total value={total} />
      <ul>
        {Object.keys(initialState).map(card => (
          <CardValue card={card} dispatch={dispatch} state={state} key={card} />
        ))}
      </ul>
      <Total value={total} />
    </Layout>
  )
}

export default IndexPage
