import DataLoader from '../DataLoader'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Api from '../../utility-classes/Api'

function getApiMethod(type, param, start, limit) {
  const methods = {
    groups: async () => await Api.getListOfGroups(start, limit),
    notes: async () => await Api.getListOfNotes(start, limit),
    'groups/notes': async () =>
      await Api.getListOfNotesInGroup(param, start, limit),
  }
  return methods[type]
}

function CardGroup(props) {
  const {
    loadingLimit: limit,
    range: { start, end },
    routeForContent,
    CardComponent,
    param,
  } = props

  const length = end - start + 1
  const [state, setState] = useState(new Array(length).fill(null))

  useEffect(() => {
    const getCards = getApiMethod(routeForContent, param, start, limit)
    getCards().then((cards) => setState(cards))
  }, [routeForContent, param, start, limit])

  return (
    <>
      {state.map((data, index) => (
        <CardComponent data={data} key={index} />
      ))}
    </>
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
