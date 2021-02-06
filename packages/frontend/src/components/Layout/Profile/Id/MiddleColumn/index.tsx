import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface } from '../../../../Interface'

export interface Props {
  user: userInterface
}

const MiddleColumn: React.FC<Props> = ({ user }) => {
  return (
    <Container className="middle-column">
      {user === undefined ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <ProfilePanel
            name={user.name}
            surname={user.surname}
            company={user.company}
            carrerPath={user.carrerPath}
            jobSituation={user.jobSituation}
            jobTitle={user.jobTitle}
            presentationLetter={user.presentationLetter}
            avatar={user.avatar}
            personalDataHidden={true}
          />
          {user.competences.length > 0 ? (
            <SkillsPanel tags={user.competences} />
          ) : (
            <></>
          )}
          {user.completedTrainings.length > 0 ? (
            <TrainingPanel
              title="Completed"
              trainings={user.completedTrainings}
            />
          ) : (
            <></>
          )}
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
