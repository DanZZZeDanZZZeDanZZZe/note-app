import React from 'react'
 
class DataLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      error: null
    }
  }

  componentDidMount() {
    const headers =  { 'Content-Type': 'application/json' }
    fetch(this.props.url, { headers })
      .then(res => {
        if (!res.status.ok) {
          throw new Error(`Data retrieval error. Status: ${res.status}`)
        }
        return res.json()
      })
      .then(result => {
        this.setState({
          data: result
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  render() {
    const {error, data} = this.state

    return (
      this.props.children(data, error)
    )
  }
}


export default DataLoader