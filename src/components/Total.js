import React from 'react'
import styled from 'styled-components'
import CoinSvg from './CoinSvg'

const Total = ({ value }) => (
  <Section>
    <CoinSvg />
    <h3>
      Total: <strong>{value}</strong>
    </h3>
    <CoinSvg />
  </Section>
)

const Section = styled.section`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 16px;
    margin-right: 16px;
  }
`

export default Total