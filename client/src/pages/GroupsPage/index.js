import { useHistory } from 'react-router-dom'
import GridOfCards from '../../components/GridOfCards'
import PageWrapper from '../../components/PageWrapper'

function GroupsPage() {
  const history = useHistory()

  return (
    <PageWrapper>
      <GridOfCards
        routeForContent="groups"
        loadingLimit={5}
        cardClickHandler={(data) => history.push(`/groups/notes/${data.title}`)}
      />
    </PageWrapper>
  )
}

export default GroupsPage
