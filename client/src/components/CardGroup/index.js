import DataComponent from '../DataComponent'
import Card from '../Card'
import DataLoader from '../DataLoader'
import PropTypes from 'prop-types'

function CardGroup(props) {
  const throwError = () => {
    throw new Error("Retrieval data isn't array!")
  }

  const renderContent = (length, data, error) => {
    data && !(data instanceof Array) && throwError()

    return new Array(length).fill(null).map((_, i) => (
      <DataComponent {...{ data: data && data[i], error }} key={i}>
        {(data) => <Card {...{ data }} />}
      </DataComponent>
    ))
  }
  const {
    limit,
    range: { start, end },
    cardContent,
  } = props

  const basename = `/api/${cardContent}/list`
  const url = `${basename}?start=${start}&limit=${limit}`
  const length = end - start + 1

  return (
    <DataLoader {...{ url }}>
      {(data, error) => renderContent(length, data, error)}
    </DataLoader>
  )
}

CardGroup.propTypes = {
  limit: PropTypes.number.isRequired,
  range: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }),
  cardContent: PropTypes.oneOf(['groups', 'notes']).isRequired,
}

export default CardGroup
