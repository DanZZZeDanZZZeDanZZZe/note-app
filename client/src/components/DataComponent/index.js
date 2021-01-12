import React from 'react'

import Spinner from "../Spinner"

function DataComponent(props) {
  if (!props.error) {
    return (
      props.data 
          ? props.children(props.data)
          : <Spinner/>
    )
  }
  return (
    <p>{props.error.message}</p>
  )
}

 

export default DataComponent