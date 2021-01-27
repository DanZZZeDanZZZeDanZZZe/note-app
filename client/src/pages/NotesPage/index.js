import NoteCard from '../../components/cards/NoteCard'
import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function NotesPage() {
  return (
    <PageWrapper>
      <GridOfCards
        routeForContent="notes"
        loadingLimit={5}
        CardComponent={NoteCard}
      />
    </PageWrapper>
  )
}

export default NotesPage
