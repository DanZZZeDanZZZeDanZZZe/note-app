import React from 'react'
import PropTypes from 'prop-types'

import Color from './styled-components/Color'
import Wrapper from './styled-components/Wrapper'

const DEFAULT_COLORS = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b',
]

function ColorPicker(props) {
  const { initalColor } = props
  const colors = DEFAULT_COLORS
  return (
    <Wrapper>
      {colors.map((color, index) => {
        const isSelected = initalColor === color

        return (
          <Color
            key={color}
            inputColor={color}
            selected={isSelected}
            onClick={() => props.setValue(isSelected ? null : color)}
            type="button"
          />
        )
      })}
    </Wrapper>
  )
}

ColorPicker.propTypes = {
  setValue: PropTypes.func.isRequired,
}

export default ColorPicker
