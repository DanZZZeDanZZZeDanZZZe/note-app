import { useHistory } from 'react-router-dom'
import DataComponent from '../../DataComponent'
import { CardContent, CardWrapper, CardTitle } from '../styled-components'

function GroupCard(props) {
  const history = useHistory()
  const { data, error } = props
  const onClickHandler = (data) => history.push(`/groups/notes/${data.title}`)

  return (
    <CardWrapper>
      <DataComponent {...{ data, error }}>
        {(data) => (
          <CardContent
            inputColor={data?.color}
            onClick={() => onClickHandler(data)}
          >
            <CardTitle>{data.title}</CardTitle>
          </CardContent>
        )}
      </DataComponent>
    </CardWrapper>
  )
}

export default GroupCard
