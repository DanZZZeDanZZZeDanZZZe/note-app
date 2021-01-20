import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function GroupsPage() {
  return (
    <PageWrapper>
      <GridOfCards cardContent="groups" loadingLimit={5} />
    </PageWrapper>
  )
}

export default GroupsPage
