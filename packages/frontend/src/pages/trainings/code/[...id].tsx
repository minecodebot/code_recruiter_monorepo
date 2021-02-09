import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import trainingsData from '../../../data/trainings/index.json'
import { userInterface, trainingInterface } from '../../../components/Interface'
import api from '../../../services/api'

export interface Props {
  me: userInterface
  trainings: trainingInterface[]
}

const Trainings: React.FC<Props> = ({ me, trainings }: Props) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Trainings</title>
      </Head>
      <Layout isLoading={isFallback} user={me} trainings={trainings} />
    </>
  )
}

export default Trainings

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
})

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  const meData = await api.get(`/users/${localStorage.getItem('user').id}`)

  return {
    props: {
      me: meData.data,
      trainings: trainingsData.filter(training =>
        id.includes(training.id.toString())
      )
    },
    revalidate: 20
  }
}
