import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function NotesPage() {
  return (
    <PageWrapper>
      <GridOfCards cardContent="notes" loadingLimit={5} />
    </PageWrapper>
  )
}

export default NotesPage
