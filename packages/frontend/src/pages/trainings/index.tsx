import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import trainingsData from '../../data/trainings/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { trainingInterface } from '../../components/Interface'

export interface Props {
  trainings: trainingInterface[]
}

const Trainings: React.FC<Props> = ({ trainings }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Trainings</title>
      </Head>
      <Layout isLoading={isFallback} trainings={trainings} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      trainings: trainingsData
    },
    revalidate: 20
  }
}
