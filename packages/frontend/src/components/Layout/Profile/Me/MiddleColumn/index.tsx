import React from 'react'
import { useSession } from 'next-auth/client'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import Button from '../../../../Button'
import {
  competenceInterface,
  trainingInterface,
  userInterface
} from '../../../../Interface'
import { useFetch } from '../../../../../hooks/useFetch'
import { GetStaticProps } from 'next'

export interface Props {
  me?: userInterface
  completedTrainings?: trainingInterface[]
  suggestedTrainings?: trainingInterface[]
  competences?: competenceInterface[]
}

const MiddleColumn: React.FC<Props> = ({
  me,
  completedTrainings,
  suggestedTrainings,
  competences
}: Props) => {
  return (
    <Container className='middle-column'>
      {me === undefined || me === null ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className='actions'>
          <Button type='edit' url='/profile/edit' />
          <ProfilePanel
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrerPath={me.carrerPath}
            jobSituation={me.jobSituation}
            jobTitle={me.jobTitle}
            presentationLetter={me.presentationLetter}
            avatar={me.avatar}
          />
          {me.competences.length > 0 ? (
            <SkillsPanel tags={competences} />
          ) : (
            <></>
          )}
          {me.completedTrainings.length > 0 ? (
            <TrainingPanel title='Completed' trainings={completedTrainings} />
          ) : (
            <></>
          )}
          {me.suggestedTrainings.length > 0 ? (
            <TrainingPanel title='Suggested' trainings={suggestedTrainings} />
          ) : (
            <></>
          )}
        </Row>
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
  const { data: competences } = await useFetch<competenceInterface[]>(
    `competences/${me.competences}`
  )

  return {
    props: {
      me: me,
      completedTrainings: completedTrainings,
      suggestedTrainings: suggestedTrainings,
      competences: competences
    },
    revalidate: 20
  }
}

export default MiddleColumn
