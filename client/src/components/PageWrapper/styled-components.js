import styled from 'styled-components'

import { smSize, lgSize } from '../../css-сonstants/screen-breakpoints'
import { ghostWhite, oceanGreen } from '../../css-сonstants/colors'
import {
  sideMenuBigWidth,
  sideMenuSmallWidth,
} from '../../css-сonstants/dimensions'
import { materialShadow3 } from '../../css-сonstants/shadows'

const Wrapper = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: ${oceanGreen};

  @media only screen and (max-width: ${smSize}) {
  }

  @media only screen and (min-width: ${smSize}) {
    padding: 0 ${sideMenuSmallWidth};
  }

  @media only screen and (min-width: ${lgSize}) {
    padding: 0 ${sideMenuBigWidth};
  }
`
const ContentSpace = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow-y: auto;
  background-color: ${ghostWhite};
  box-shadow: ${materialShadow3};
`

export { Wrapper, ContentSpace }
