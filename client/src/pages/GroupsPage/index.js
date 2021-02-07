import React from 'react'
import GroupCard from '../../components/cards/GroupCard'
import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function GroupsPage() {
  return (
    <PageWrapper>
      <GridOfCards
        routeForContent="groups"
        loadingLimit={5}
        CardComponent={GroupCard}
      />
    </PageWrapper>
  )
}

export default GroupsPage
