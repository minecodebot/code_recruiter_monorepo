import React from 'react'
import { useSession } from 'next-auth/client'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { examInterface, userInterface } from '../../../Interface'
import { useFetch } from '../../../../hooks/useFetch'
import { GetStaticProps } from 'next'

export interface Props {
  me?: userInterface
  exams?: examInterface[]
}

const MiddleColumn: React.FC<Props> = ({ me, exams }: Props) => {
  return (
    <Container className='middle-column'>
      {me === undefined || me === null ? (
        <LoadingExamTrainingPanel />
      ) : (
        <Row className='actions'>
          {me.exams.length > 0 ? <ExamsPanel exams={exams} /> : <></>}
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
  const { data: exams } = await useFetch<examInterface[]>(`exams/${me.exams}`)

  return {
    props: {
      me: me,
      exams: exams
    },
    revalidate: 20
  }
}

export default MiddleColumn
