import styled from 'styled-components'
import { bisque } from '../../css-сonstants/colors'
import { materialShadow1 } from '../../css-сonstants/shadows'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const CardContent = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  place-items: center;
  padding: 1rem;
  background-color: ${(props) => props.inputColor || bisque};
  box-shadow: ${materialShadow1};

  &:hover {
    cursor: pointer;
  }
`
const Title = styled.span`
  grid-row: 2;
  font-size: 1.2rem;
  font-weight: 400;
`
const Date = styled.span`
  grid-row: 3;
  font-size: 0.9rem;
  font-weight: 200;
  place-self: end;
`

export { Wrapper, Title, Date, CardContent }
