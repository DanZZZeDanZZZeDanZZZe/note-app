import React from 'react'

import styled from 'styled-components'
import DataComponent from '../DataComponent'
import DataLoader from '../DataLoader'
import DataLoadingComponent from '../DataLoadingComponent'

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
`

const Title = styled.h3`
  
`

const Text = styled.textarea`
  
`

class NoteCard extends React.Component {
  render() {
    const {url} = this.props
    return (
      <Wrapper>
        <DataLoadingComponent {...{url}}>
          {(data) => (
            <>
              <Title>{data?.name}</Title>
              <Text defaultValue={data?.height}></Text>
            </>
          )}
        </DataLoadingComponent>
      </Wrapper>
    )
  }
}

export default NoteCard