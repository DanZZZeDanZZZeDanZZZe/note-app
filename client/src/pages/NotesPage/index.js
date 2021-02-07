import React from 'react'
import NoteCard from '../../components/cards/NoteCard'
import GridOfCards from '../../components/GridOfCards'
import PageBase from '../PageBase'

function NotesPage() {
  return (
    <PageBase>
      <GridOfCards
        routeForContent="notes"
        loadingLimit={5}
        CardComponent={NoteCard}
      />
    </PageBase>
  )
}

export default NotesPage
