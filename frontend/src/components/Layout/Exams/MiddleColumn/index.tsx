import React from 'react'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface } from '../../../Interface'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useFetch } from '../../../../hooks/useFetch'

const MiddleColumn: React.FC = () => {
  const [ session ] = useSession()

  const { data } = useFetch<userInterface>(`users/${session?.user.email}`)
  const me = data
  return (
    <Container className="middle-column">
      {me === undefined || me === null ? (
        <LoadingExamTrainingPanel />
      ) : (
        <Row className="actions">
          {me.exams.length > 0 ? <ExamsPanel exams={me.exams} /> : <></>}
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
