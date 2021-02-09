import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import {
  competenceInterface,
  trainingInterface,
  userInterface
} from '../../../../Interface'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/client'
import { useFetch } from '../../../../../hooks/useFetch'

export interface Props {
  user?: userInterface
  completedTrainings?: trainingInterface[]
  competences?: competenceInterface[]
}

const MiddleColumn: React.FC<Props> = ({
  user,
  completedTrainings,
  competences
}: Props) => (
  <Container className='middle-column'>
    {user === undefined ? (
      <>
        <LoadingProfilePanel />
        <LoadingExamTrainingPanel />
        <LoadingExamTrainingPanel />
      </>
    ) : (
      <Row className='actions'>
        <ProfilePanel
          name={user.name}
          surname={user.surname}
          company={user.company}
          carrerPath={user.carrerPath}
          jobSituation={user.jobSituation}
          jobTitle={user.jobTitle}
          presentationLetter={user.presentationLetter}
          avatar={user.avatar}
          personalDataHidden
        />
        {user.competences.length > 0 ? (
          <SkillsPanel tags={competences} />
        ) : (
          <></>
        )}
        {user.completedTrainings.length > 0 ? (
          <TrainingPanel title='Completed' trainings={completedTrainings} />
        ) : (
          <></>
        )}
      </Row>
    )}
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const [session] = useSession()

  const { data: user } = await useFetch<userInterface>(
    `users/${session?.user.email}`
  )
  const { data: completedTrainings } = await useFetch<trainingInterface[]>(
    `completed_trainings/${user.completedTrainings}`
  )
  const { data: competences } = await useFetch<competenceInterface[]>(
    `competences/${user.competences}`
  )

  return {
    props: {
      user: user,
      completedTrainings: completedTrainings,
      competences: competences
    },
    revalidate: 20
  }
}

export default MiddleColumn
