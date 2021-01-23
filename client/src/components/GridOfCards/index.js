import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Grid } from './styled-components'
import DataLoadingComponent from '../DataLoadingComponent'
import generateRanges from './utils'
import CardGroup from '../CardGroup'

class GridOfCards extends React.Component {
  render() {
    const { cardContent, loadingLimit: limit } = this.props
    const url = `api/${cardContent}/length`

    return (
      <>
        <Wrapper>
          <DataLoadingComponent {...{ url }}>
            {(data) => {
              const ranges = generateRanges(data.count, limit)

              return (
                <Grid>
                  {ranges.map((range, i) => (
                    <CardGroup key={i} {...{ range, ...this.props }} />
                  ))}
                </Grid>
              )
            }}
          </DataLoadingComponent>
        </Wrapper>
      </>
    )
  }
}

GridOfCards.propTypes = {
  loadingLimit: PropTypes.number.isRequired,
  cardContent: PropTypes.oneOf(['groups', 'notes']).isRequired,
}

export default GridOfCards
