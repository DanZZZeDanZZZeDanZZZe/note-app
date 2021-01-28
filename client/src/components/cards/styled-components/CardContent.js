import styled from 'styled-components'
import { materialShadow1 } from '../../../css-сonstants/shadows'

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1.5rem 1fr 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 20%));
  place-content: center;
  place-items: center;
  padding: 1rem;
  background-color: ${(props) => props.inputColor || 'white'};
  box-shadow: ${materialShadow1};

  & > button {
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover > button {
    opacity: 1;
  }
`

export default CardContent
