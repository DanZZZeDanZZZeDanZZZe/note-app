import React from 'react'

import ErrorBoundary from '../../components/ErrorBoundary'
import PageWrapper from '../../components/PageWrapper'

function PageBase(props) {
  return (
    <PageWrapper>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </PageWrapper>
  )
}

export default PageBase
