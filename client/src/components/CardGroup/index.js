import DataLoader from '../DataLoader'
import PropTypes from 'prop-types'

const ERROR_MESSAGE = "Retrieval data isn't array!"

function CardGroup(props) {
  const {
    loadingLimit: limit,
    range: { start, end },
    routeForContent,
    CardComponent,
    param,
  } = props

  const basename = `/api/${routeForContent}/list`
  const url = `${basename}/${param || ''}?start=${start}&limit=${limit}`
  const length = end - start + 1

  return (
    <DataLoader {...{ url }}>
      {(dataArr, error) => {
        let isReceived = false
        if (dataArr) {
          if (!(dataArr instanceof Array)) throw new Error(ERROR_MESSAGE)
          isReceived = true
        }

        return new Array(length).fill(null).map((_, i) => {
          const data = isReceived ? dataArr[i] : null
          return <CardComponent {...{ data, error }} key={i} />
        })
      }}
    </DataLoader>
  )
}

CardGroup.propTypes = {
  CardComponent: PropTypes.elementType.isRequired,
  loadingLimit: PropTypes.number.isRequired,
  range: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }),
  routeForContent: PropTypes.oneOf(['groups', 'notes', 'groups/notes'])
    .isRequired,
}

export default CardGroup
