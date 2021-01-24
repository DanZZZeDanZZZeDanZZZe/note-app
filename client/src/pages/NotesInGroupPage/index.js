import { useParams } from 'react-router-dom'
import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function NotesInGroupPage() {
  const { groupTitle } = useParams()
  return (
    <PageWrapper>
      <GridOfCards
        routeForContent="groups/notes"
        cardType="forNotes"
        loadingLimit={5}
        param={groupTitle}
      />
    </PageWrapper>
  )
}

export default NotesInGroupPage
