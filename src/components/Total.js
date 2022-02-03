import React, { useState } from 'react'
import styled from 'styled-components'
import CoinSvg from './CoinSvg'

const MAX_TOTAL = 556

const Total = ({ value }) => {
  const [savedTotal, setSavedTotal] = useState(null);
  if (!value) return null;

  return (
    <Section>
      <CoinSvg />
      <h3>
        Your Total: <strong>{value}</strong>
        <br />
        Opponent's Total: <strong>{MAX_TOTAL - value}</strong>
      </h3>
      <button
        onClick={() => setSavedTotal(value)}
        aria-label="save total"
        type="button"
      >
        <CoinSvg />
      </button>
      {savedTotal && <p aria-description="saved total">{savedTotal}</p>}
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
  p {
    font-weight: bold;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`

export default Total