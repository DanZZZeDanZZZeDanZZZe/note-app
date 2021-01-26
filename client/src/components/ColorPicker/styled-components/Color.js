import styled from 'styled-components'
import { materialShadow1 } from '../../../css-сonstants/shadows'

export default styled.div.attrs((props) => ({
  border: props.selected ? '2px solid white' : 'none',
}))`
  background-color: ${(props) => props.inputColor};
  border: ${(props) => props.border};
  box-shadow: ${materialShadow1};
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`
