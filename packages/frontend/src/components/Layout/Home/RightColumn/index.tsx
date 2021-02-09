import React from 'react'
import { useSession } from 'next-auth/client'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../ProfilePanel'
import SkillsPanel from '../../../SkillsPanel'
import TrainingPanel from '../../../TrainingPanel'
import { Container } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import {
  competenceInterface,
  trainingInterface,
  userInterface
} from '../../../Interface'
import { useFetch } from '../../../../hooks/useFetch'
import { GetStaticProps } from 'next'

export interface Props {
  me?: userInterface
  completedTrainings?: trainingInterface[]
  suggestedTrainings?: trainingInterface[]
  competences?: competenceInterface[]
}

const RightColumn: React.FC<Props> = ({
  me,
  completedTrainings,
  suggestedTrainings,
  competences
}: Props) => {
  return (
    <Container className='left-column'>
      {me === undefined || me === null ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <>
          <ProfilePanel
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrerPath={me.carrerPath}
            jobSituation={me.jobSituation}
            jobTitle={me.jobTitle}
            presentationLetter={me.presentationLetter}
            avatar={me.avatar}
            short
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
        </>
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
    `suggested_trainings/${me.suggestedTrainings}`
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

export default RightColumn
