import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { postInterface } from '../components/Interface'
import api from '../services/api'
import { useSession, getSession } from 'next-auth/client'
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from '../store/actions/users'
export interface Props {
  posts: postInterface[],
}

const Home: React.FC<Props> = ({ posts }) => {
  const { isFallback } = useRouter()
  const [session] = useSession()

  if (session) {
    const dispatch = useDispatch();
    dispatch(userLogin(session.user))
  }

  return (
    <>
      <Head>
        <title>Job Search Plataform</title>
      </Head>
      <Layout isLoading={isFallback} posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await api.get("/jobs")
  return {
    props: {
      posts: postsData.data
    },
    revalidate: 20
  }
}


