import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import {
  eggplant,
  ghostWhite,
  maroonX11,
  oceanGreen,
} from '../../../../css-сonstants/colors'
import { lgSize, smSize } from '../../../../css-сonstants/screen-breakpoints'
import { materialShadow1 } from '../../../../css-сonstants/shadows'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding-top: 5rem;

  & textarea,
  & input,
  & select {
    grid-column: span 2;
    background-color: white;
    padding: 1rem;
    margin-top: 1.2rem;
    font-size: 1.1rem;
    border: none;
    box-sizing: border-box;
    box-shadow: ${materialShadow1};
  }

  & label {
    display: grid;
    grid: 1rem auto / 1fr auto;
    padding-top: 2rem;
    width: 100%;
    grid-gap: 0.4rem;
  }

  & input {
    grid-column: span 2;
  }

  & textarea {
    grid-column: span 2;
    min-height: 10rem;
  }

  & span {
    grid-row-start: 1;
    grid-column-end: -1;
    text-align: right;
    color: ${maroonX11};
    animation: ${keyframes(fadeIn)} 0.3s ease-in-out;
  }

  & legend {
    font-size: 1.2rem;
    font-stretch: ultra-expanded;
    font-weight: 500;
  }

  & button {
    padding: 1rem;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    border: none;
    box-sizing: border-box;
    box-shadow: ${materialShadow1};
    color: ${ghostWhite};
    background-color: ${oceanGreen};
    margin-left: auto;
    transition: ease-out 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${eggplant};
    }

    &:disabled {
      opacity: 0.6;
      &:hover {
        cursor: auto;
        background-color: ${oceanGreen};
      }
    }
  }

  @media only screen and (max-width: ${smSize}) {
    width: 90%;
  }

  @media only screen and (min-width: ${smSize}) {
    width: 75%;
  }

  @media only screen and (min-width: ${lgSize}) {
    width: 60%;
  }
`

export { StyledForm }
