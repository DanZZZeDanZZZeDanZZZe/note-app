import Card from '../Card'
import DataLoader from '../DataLoader'
import PropTypes from 'prop-types'
import capitalize from '../../utils/capitalize'

function CardGroup(props) {
  const throwError = () => {
    throw new Error("Retrieval data isn't array!")
  }

  const {
    loadingLimit: limit,
    range: { start, end },
    routeForContent,
    cardType,
    param,
  } = props

  const type = cardType || `for${capitalize(routeForContent)}`
  const basename = `/api/${routeForContent}/list`
  const url = `${basename}/${param || ''}?start=${start}&limit=${limit}`
  const length = end - start + 1

  const renderContent = (currentData, error) => {
    let isReceived = false
    if (currentData) {
      if (!(currentData instanceof Array)) throwError()
      isReceived = true
    }

    return new Array(length).fill(null).map((_, i) => {
      const data = isReceived ? currentData[i] : null

      return <Card {...{ data, error, type }} key={i} />
    })
  }

  return (
    <DataLoader {...{ url }}>
      {(data, error) => renderContent(data, error)}
    </DataLoader>
  )
}

CardGroup.propTypes = {
  loadingLimit: PropTypes.number.isRequired,
  range: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }),
  routeForContent: PropTypes.oneOf(['groups', 'notes']).isRequired,
}

export default CardGroup
