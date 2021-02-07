import React from 'react'
import GroupCard from '../../components/cards/GroupCard'
import GridOfCards from '../../components/GridOfCards'
import PageBase from '../PageBase'

function GroupsPage() {
  return (
    <PageBase>
      <GridOfCards
        routeForContent="groups"
        loadingLimit={5}
        CardComponent={GroupCard}
      />
    </PageBase>
  )
}

export default GroupsPage
