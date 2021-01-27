import styled from 'styled-components'
import { materialShadow1 } from '../../../css-сonstants/shadows'

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  place-items: center;
  padding: 1rem;
  background-color: ${(props) => props.inputColor || 'white'};
  box-shadow: ${materialShadow1};

  &:hover {
    cursor: pointer;
  }
`

export default CardContent
