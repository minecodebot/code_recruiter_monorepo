import React from 'react'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface } from '../../../Interface'

export interface Props {
  me: userInterface
}

const MiddleColumn: React.FC<Props> = ({ me }) => {
  return (
    <Container className="middle-column">
      {me === undefined ? (
        <LoadingExamTrainingPanel />
      ) : (
        <Row className="actions">
          {me.exams.length > 0 ? <ExamsPanel exams={me.exams} /> : <></>}
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
