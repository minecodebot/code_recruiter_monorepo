import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import Button from '../../../../Button'
import { userInterface } from '../../../../Interface'

export interface Props {
  me: userInterface
}

const MiddleColumn: React.FC<Props> = ({ me }) => {
  return (
    <Container className="middle-column">
      {me === undefined ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <Button type="edit" url="/profile/edit" />
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
          {me.competences.length > 0 ? <SkillsPanel tags={me.competences} /> : <></>}
          {me.completedTrainings.length > 0 ? <TrainingPanel title="Completed" trainings={me.completedTrainings} /> : <></>}
          {me.suggestedTrainings.length > 0 ? <TrainingPanel title="Suggested" trainings={me.suggestedTrainings} /> : <></>}
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
