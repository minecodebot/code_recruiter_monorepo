import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import trainingsData from '../../data/trainings/index.json'
import { trainingInterface } from '../../components/Interface'

export interface Props {
  trainings: trainingInterface[]
}

const Trainings: React.FC<Props> = ({ trainings }: Props) => {
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

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    trainings: trainingsData
  },
  revalidate: 20
})
