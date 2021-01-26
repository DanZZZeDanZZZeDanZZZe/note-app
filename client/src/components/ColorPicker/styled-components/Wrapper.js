import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-rows: 40px;
  grid: auto-flow minmax(30%, 50%) / repeat(auto-fit, minmax(40px, 1fr));
  place-content: center;
  width: 100%;
  height: 5rem;
  overflow-y: auto;
`
