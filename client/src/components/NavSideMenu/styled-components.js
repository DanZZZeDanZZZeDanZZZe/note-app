import { mdSize, smSize, lgSize } from "../../css-сonstants/screen-breakpoints";
import { ghostWhite } from "../../css-сonstants/colors";
import styled from "styled-components"

const Nav = styled.div`
  & ul {
    margin: 1rem 0;
    padding: 0
  }

  & li {
    list-style-type: none;
    padding: .5rem 0;
    border-radius: .5rem;
  }

  & a {
    display: inline-block;
    width: 100%;
    text-align: center;
    text-decoration: none; 
    color: inherit;
  }

  @media only screen and (max-width: ${lgSize}) {
    & li {
      margin-top: 1rem;
      font-size: 1.2rem;
      padding: 1rem 0;
      background-color: ${ghostWhite};
      color: black;
    }
  }

  @media only screen and (min-width: ${lgSize}) {
    & li {
      margin-top: 1rem;
      transition: all .1s;

      &:hover {
        background-color: ${ghostWhite};
        color: black;
        cursor: pointer;
      }
    }
  }
`
export {
  Nav
}