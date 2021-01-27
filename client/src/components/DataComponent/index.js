import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '../Spinner'

function DataComponent(props) {
  if (!props.error) {
    return props.data ? props.children(props.data) : <Spinner />
  }
  return <p>{props.error.message}</p>
}

DataComponent.propTypes = {
  children: PropTypes.func.isRequired,
}

export default DataComponent
