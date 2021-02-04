import React from 'react'
import PropTypes from 'prop-types'

class DataLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      error: null,
    }
  }

  componentDidMount() {
    const headers = { 'Content-Type': 'application/json' }
    fetch(this.props.url, { headers })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Data retrieval error. Status: ${res.status}`)
        }
        return res.json()
      })
      .then((result) => {
        this.setState({
          data: result,
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    const { error, data } = this.state

    return this.props.children(data, error)
  }
}

DataLoader.propTypes = {
  children: PropTypes.func.isRequired,
}

export default DataLoader
