import React from 'react'
import { useSession } from 'next-auth/client'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../../ProfilePanelEdit'
import { Container, Row } from './styles'
import { userInterface } from '../../../../Interface'
import { useFetch } from '../../../../../hooks/useFetch'

const MiddleColumn: React.FC = () => {
  const [session] = useSession()

  const { data } = useFetch<userInterface>(`users/${session?.user.email}`)
  const me = data
  return (
    <Container className='middle-column'>
      {me === undefined || me === null ? (
        <LoadingProfilePanel />
      ) : (
        <Row className='actions'>
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
