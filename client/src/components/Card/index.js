import React from 'react'

import { Wrapper } from './styled-components'

function Card(props) {
  const { data } = props
  console.log('🚀 ~ file: index.js ~ line 9 ~ Card ~ render ~ data', data)
  return <Wrapper></Wrapper>
}

export default Card
