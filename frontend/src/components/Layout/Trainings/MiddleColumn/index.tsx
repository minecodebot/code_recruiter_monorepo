import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface, trainingInterface } from '../../../Interface'
import { useSession } from 'next-auth/client'
import { useFetch } from '../../../../hooks/useFetch'

export interface Props {
  trainings: trainingInterface[]
}

const MiddleColumn: React.FC<Props> = ({ trainings }) => {
  const [ session ] = useSession()

  const { data } = useFetch<userInterface>(`users/${session?.user.email}`)
  const me = data
  return (
    <Container className="middle-column">
      {me === undefined || trainings === undefined ? (
        <>
          {me === undefined || me === null ? (
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
