import React from 'react'
import DateHandler from '../../utility-classes/DateHandler'
import DataComponent from '../DataComponent'
import PropTypes from 'prop-types'
import { Wrapper, Title, Date, CardContent } from './styled-components'

function Card(props) {
  const { data, error, type } = props
  const isForNotes = type === 'forNotes'

  return (
    <Wrapper>
      <DataComponent {...{ data, error }}>
        {(data) => (
          <CardContent inputColor={data?.color}>
            <Title>{data.title}</Title>
            {isForNotes && <Date>{DateHandler.formatDate(data.date)}</Date>}
          </CardContent>
        )}
      </DataComponent>
    </Wrapper>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['forGroups', 'forNotes']).isRequired,
}

export default Card
