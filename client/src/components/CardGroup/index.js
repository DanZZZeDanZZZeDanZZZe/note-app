import Card from '../Card'
import DataLoader from '../DataLoader'
import PropTypes from 'prop-types'
import capitalize from '../../utils/capitalize'

function CardGroup(props) {
  const throwError = () => {
    throw new Error("Retrieval data isn't array!")
  }

  const {
    limit,
    range: { start, end },
    cardContent,
  } = props

  const renderContent = (length, currentData, error) => {
    let isReceived = false
    if (currentData) {
      if (!(currentData instanceof Array)) throwError()
      isReceived = true
    }

    return new Array(length).fill(null).map((_, i) => {
      const data = isReceived ? currentData[i] : null
      return (
        <Card
          {...{ data, error, type: `for${capitalize(cardContent)}` }}
          key={i}
        />
      )
    })
  }

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
