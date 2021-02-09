import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from '../../../styles/GlobalStyles'

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Exam</title>
    </Head>

    <h1>Code Contest Instance</h1>
    <p>Redirecting to a code contest instance...</p>
  </Container>
)

export default Home

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
})

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  return {
    props: {
      id
    },
    revalidate: 20
  }
}
