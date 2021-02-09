import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

const Trainings: React.FC = () => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Edit Profile</title>
      </Head>
      <Layout isLoading={isFallback} />
    </>
  )
}

export default Trainings
