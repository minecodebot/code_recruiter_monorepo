import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../ProfilePanel'
import SkillsPanel from '../../../SkillsPanel'
import TrainingPanel from '../../../TrainingPanel'
import { Container } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface } from '../../../Interface'
export interface Props {
  me: userInterface
}

const RightColumn: React.FC<Props> = ({ me }) => {
  console.log('me')
  console.log(me)
  return (
    <Container className="left-column">
      {me === undefined ? (
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
            short={true}
          />
          {me.competences.length > 0 ? <SkillsPanel tags={me.competences} /> : <></>}
          {me.completedTrainings.length > 0 ? <TrainingPanel title="Completed" trainings={me.completedTrainings} /> : <></>}
          {me.suggestedTrainings.length > 0 ? <TrainingPanel title="Suggested" trainings={me.suggestedTrainings} /> : <></>}
        </>
      )}
    </Container>
  )
}

export default RightColumn
