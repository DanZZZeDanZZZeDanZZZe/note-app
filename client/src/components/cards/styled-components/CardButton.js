import styled from 'styled-components'
import { maroonX11 } from '../../../css-сonstants/colors'

const CardButton = styled.button`
  grid-row: 1;
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    width: 100%;
    height: 100%;
    color: ${maroonX11};
  }
`

export default CardButton
