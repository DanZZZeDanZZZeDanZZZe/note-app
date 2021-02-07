import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, Grid } from './styled-components'
import generateRanges from './utils'
import CardGroup from '../CardGroup'
import { getTheCountOfNotesAsync } from '../../state/actions/notesActions'
import { getTheCountOfGroupsAsync } from '../../state/actions/groupsActions'
import DataComponent from '../DataComponent'

function getAction(gridType) {
  const actions = {
    notes: getTheCountOfNotesAsync,
    groups: getTheCountOfGroupsAsync,
    'groups/notes': getTheCountOfNotesAsync,
  }

  return actions[gridType]
}

function getSelector(gridType, param) {
  const selectors = {
    notes: (state) => state.notes.listOfNotes,
    groups: (state) => state.groups.listOfGroups,
    'groups/notes': (state) => state.notes.listOfNotes.containingGroups,
  }

  return selectors[gridType]
}

function GridOfCards(props) {
  const { routeForContent, loadingLimit: limit, param } = props
  const action = getAction(routeForContent)
  const selector = getSelector(routeForContent)

  const dispatch = useDispatch()
  const data = useSelector(selector)
  const list = param ? data[param] : data

  useEffect(() => {
    dispatch(action(param))
  }, [dispatch, param, action])

  return (
    <Wrapper>
      <DataComponent data={list?.count} error={list?.errorMessage}>
        {(count) => {
          const ranges = generateRanges(count, limit)

          return (
            <Grid>
              {ranges.map((range, i) => (
                <CardGroup key={i} {...{ range, ...props }} />
              ))}
            </Grid>
          )
        }}
      </DataComponent>
    </Wrapper>
  )
}

GridOfCards.propTypes = {
  loadingLimit: PropTypes.number.isRequired,
  routeForContent: PropTypes.oneOf(['groups', 'notes', 'groups/notes'])
    .isRequired,
}

export default GridOfCards
