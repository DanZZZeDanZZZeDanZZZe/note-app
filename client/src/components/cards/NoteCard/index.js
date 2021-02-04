import { MdDelete } from 'react-icons/md'

import DateHandler from '../../../utility-classes/DateHandler'
import DataComponent from '../../DataComponent'
import { bisque } from '../../../css-сonstants/colors'
import {
  CardContent,
  CardWrapper,
  CardDate,
  CardTitle,
  CardButton,
} from '../styled-components'

const CONFIRM_MESSAGE = 'Are you sure you want to delete the item?'

function NoteCard(props) {
  const { data, error } = props
  const onDelitingHandle = (data) => {
    if (window.confirm(CONFIRM_MESSAGE)) {
      fetch(`/api/notes/${data._id}`, { method: 'DELETE' }).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <CardWrapper>
      <DataComponent {...{ data, error }}>
        {(data) => (
          <CardContent inputColor={bisque}>
            <CardButton onClick={() => onDelitingHandle(data)}>
              <MdDelete />
            </CardButton>
            <CardTitle>{data.title}</CardTitle>
            <CardDate>{DateHandler.formatDate(data.date)}</CardDate>
          </CardContent>
        )}
      </DataComponent>
    </CardWrapper>
  )
}

export default NoteCard
