import DateHandler from '../../../utility-classes/DateHandler'
import DataComponent from '../../DataComponent'
import { bisque } from '../../../css-сonstants/colors'
import {
  CardContent,
  CardWrapper,
  CardDate,
  CardTitle,
} from '../styled-components'

function NoteCard(props) {
  const { data, error } = props

  return (
    <CardWrapper>
      <DataComponent {...{ data, error }}>
        {(data) => (
          <CardContent inputColor={bisque}>
            <CardTitle>{data.title}</CardTitle>
            <CardDate>{DateHandler.formatDate(data.date)}</CardDate>
          </CardContent>
        )}
      </DataComponent>
    </CardWrapper>
  )
}

export default NoteCard
