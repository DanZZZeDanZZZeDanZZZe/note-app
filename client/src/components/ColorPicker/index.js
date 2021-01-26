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

class ColorPicker extends React.Component {
  colors = DEFAULT_COLORS

  constructor(props) {
    super(props)
    this.setValue = props.setValue
    this.state = {
      activeIndex: null,
    }
  }

  colorClickHandler(index) {
    const activeIndex = this.state.activeIndex !== index ? index : null

    this.setState({
      ...this.state,
      activeIndex,
    })
  }

  componentDidUpdate() {
    const color = this.colors[this.state.activeIndex]
    this.setValue(color)
  }

  render() {
    return (
      <Wrapper>
        {this.colors.map((color, index) => (
          <Color
            key={color}
            inputColor={color}
            selected={this.state.activeIndex === index}
            onClick={() => this.colorClickHandler(index)}
          />
        ))}
      </Wrapper>
    )
  }
}

ColorPicker.propTypes = {
  setValue: PropTypes.func.isRequired,
}

export default ColorPicker
