import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { trainingInterface } from '../../../Interface'

export interface Props {
  trainings: trainingInterface[]
}

const MiddleColumn: React.FC<Props> = ({ trainings }) => {
  return (
    <Container className="middle-column">
      {trainings === undefined ? (
        <LoadingExamTrainingPanel />
      ) : (
          trainings.length > 0 ?
            <Row className="actions">
              <TrainingPanel title="All" trainings={trainings} />
            </Row> : <p>No trainings found</p>
        )}
    </Container>
  )
}

export default MiddleColumn
