import { useHistory } from 'react-router-dom'
import { MdDelete, MdFolder } from 'react-icons/md'

import DataComponent from '../../DataComponent'
import {
  CardContent,
  CardWrapper,
  CardTitle,
  CardButton,
} from '../styled-components'

const CONFIRM_MESSAGE = 'Are you sure you want to delete the item?'

function GroupCard(props) {
  const history = useHistory()
  const { data, error } = props
  const onOpeningHandler = (data) => history.push(`/groups/notes/${data.title}`)
  const onDelitingHandler = (data) => {
    if (window.confirm(CONFIRM_MESSAGE)) {
      fetch(`/api/groups/${data.title}`, { method: 'DELETE' }).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <CardWrapper>
      <DataComponent {...{ data, error }}>
        {(data) => (
          <CardContent inputColor={data?.color}>
            <CardButton onClick={() => onOpeningHandler(data)}>
              <MdFolder />
            </CardButton>
            <CardButton onClick={() => onDelitingHandler(data)}>
              <MdDelete />
            </CardButton>
            <CardTitle>{data.title}</CardTitle>
          </CardContent>
        )}
      </DataComponent>
    </CardWrapper>
  )
}

export default GroupCard
