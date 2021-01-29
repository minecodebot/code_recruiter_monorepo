import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface, trainingInterface } from '../../../Interface'

export interface Props {
  me: userInterface
  trainings: trainingInterface[]
}

const MiddleColumn: React.FC<Props> = ({ me, trainings }) => {
  return (
    <Container className="middle-column">
      {me === undefined || trainings === undefined ? (
        <>
          {me === undefined ? (
            <>
              <LoadingExamTrainingPanel />
              <LoadingExamTrainingPanel />
            </>
          ) : (
              <></>
            )}
          {trainings === undefined ? <LoadingExamTrainingPanel /> : <></>}
        </>
      ) : (
          <></>
        )}
      {me !== undefined || trainings !== undefined ? (
        <Row className="actions">
          {me !== undefined ? (
            <>
              {me.completedTrainings.length > 0 ? <TrainingPanel
                title="Completed"
                trainings={me.completedTrainings}
              /> : <></>}
              {me.suggestedTrainings.length > 0 ? <TrainingPanel
                title="Suggested"
                trainings={me.suggestedTrainings}
              /> : <></>}
            </>
          ) : (
              <></>
            )}
          {trainings !== undefined ? (
            <TrainingPanel title="All" trainings={trainings} />
          ) : (
              <></>
            )}
        </Row>
      ) : (
          <></>
        )}
    </Container>
  )
}

export default MiddleColumn
