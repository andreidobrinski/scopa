import React from 'react'
import styled from 'styled-components'
import CoinSvg from './CoinSvg'

const MAX_TOTAL = 556

const Total = ({ value }) => {
  if (!value) return null;

  return (
    <Section>
      <CoinSvg />
      <h3>
        Your Total: <strong>{value}</strong>
        <br />
        Opponent's Total: <strong>{MAX_TOTAL - value}</strong>
      </h3>
      <CoinSvg />
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 16px;
    margin-right: 16px;
    text-align: right;
  }
`

export default Total