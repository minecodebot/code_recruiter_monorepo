import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../../ProfilePanelEdit'
import { Container, Row } from './styles'
import { userInterface } from '../../../../Interface'

export interface Props {
  me: userInterface
}

const MiddleColumn: React.FC<Props> = ({ me }) => {
  return (
    <Container className="middle-column">
      {me === undefined ? (
        <LoadingProfilePanel />
      ) : (
        <Row className="actions">
          <ProfilePanelEdit
            email={me.email}
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrerPath={me.carrerPath}
            jobSituation={me.jobSituation}
            jobTitle={me.jobTitle}
            presentationLetter={me.presentationLetter}
            avatar={me.avatar}
            competences={me.competences}
            completedTrainings={me.completedTrainings}
            suggestedTrainings={me.suggestedTrainings}
            exams={me.exams}
          />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
