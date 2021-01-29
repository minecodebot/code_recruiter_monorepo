import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { userInterface } from '../../../components/Interface'
import api from '../../../services/api'

export interface Props {
  user: userInterface
}

const Trainings: React.FC<Props> = ({ user }) => {
  const { isFallback } = useRouter()


  return (
    <>
      <Head>
        <title>Job Search Plataform - User Profile</title>
      </Head>
      <Layout isLoading={isFallback} user={user} />
    </>
  )
}

export default Trainings

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  const userData = await api.get(`/users/${id}`)

  return {
    props: {
      user: userData.data
    },
    revalidate: 20
  }
}
