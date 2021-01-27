import { useParams } from 'react-router-dom'
import NoteCard from '../../components/cards/NoteCard'
import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function NotesInGroupPage() {
  const { groupTitle } = useParams()
  return (
    <PageWrapper>
      <GridOfCards
        routeForContent="groups/notes"
        CardComponent={NoteCard}
        loadingLimit={5}
        param={groupTitle}
      />
    </PageWrapper>
  )
}

export default NotesInGroupPage
