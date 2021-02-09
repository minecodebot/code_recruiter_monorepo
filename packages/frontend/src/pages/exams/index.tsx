import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import LayoutExams from '../../components/Layout'

const Trainings: React.FC = () => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Exams</title>
      </Head>
      <LayoutExams isLoading={isFallback} />
    </>
  )
}

export default Trainings
