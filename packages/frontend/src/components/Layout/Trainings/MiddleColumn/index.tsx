import React from 'react'
import { useSession } from 'next-auth/client'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface, trainingInterface } from '../../../Interface'
import { useFetch } from '../../../../hooks/useFetch'
import { GetStaticProps } from 'next'

export interface Props {
  me?: userInterface
  completedTrainings?: trainingInterface[]
  suggestedTrainings?: trainingInterface[]
  trainings?: trainingInterface[]
}

const MiddleColumn: React.FC<Props> = ({
  me,
  completedTrainings,
  suggestedTrainings,
  trainings
}: Props) => {
  return (
    <Container className='middle-column'>
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
        <Row className='actions'>
          {me !== undefined ? (
            <>
              {me.completedTrainings.length > 0 ? (
                <TrainingPanel
                  title='Completed'
                  trainings={completedTrainings}
                />
              ) : (
                <></>
              )}
              {me.suggestedTrainings.length > 0 ? (
                <TrainingPanel
                  title='Suggested'
                  trainings={suggestedTrainings}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {trainings !== undefined ? (
            <TrainingPanel title='All' trainings={trainings} />
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

export const getStaticProps: GetStaticProps = async () => {
  const [session] = useSession()

  const { data: me } = await useFetch<userInterface>(
    `users/${session?.user.email}`
  )
  const { data: completedTrainings } = await useFetch<trainingInterface[]>(
    `completed_trainings/${me.completedTrainings}`
  )
  const { data: suggestedTrainings } = await useFetch<trainingInterface[]>(
    `suggested_trainings/${me.completedTrainings}`
  )
  const { data: trainings } = await useFetch<trainingInterface[]>('trainings/')

  return {
    props: {
      me: me,
      completedTrainings: completedTrainings,
      suggestedTrainings: suggestedTrainings,
      trainings: trainings
    },
    revalidate: 20
  }
}

export default MiddleColumn
