import PropTypes from 'prop-types'

import DataComponent from '../DataComponent'
import DataLoader from '../DataLoader'

function DataLoadingComponent(props) {
  return (
    <DataLoader {...{ url: props.url }}>
      {(data, error) => (
        <DataComponent {...{ data, error }}>{props.children}</DataComponent>
      )}
    </DataLoader>
  )
}

DataLoadingComponent.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
}

export default DataLoadingComponent
