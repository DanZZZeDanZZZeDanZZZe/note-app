import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid: auto-flow minmax(auto, 30%) / repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  height: 100%;
  max-height: 100%;
  width: 100%;
`

export { Wrapper, Grid }
