import React from 'react'
import LoadingFeedOpportunity from '../../../Shimmer/LoadingFeedOpportunity'
import FeedOpportunity from '../../../FeedOpportunity'
import { Container } from './styles'
import { postInterface } from '../../../Interface'

export interface Props {
  posts: postInterface[]
}

const MiddleColumn: React.FC<Props> = ({ posts }) => {
  return (
    <Container className="left-column">
      {posts === undefined ? (
        <>
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
        </>
      ) : (
        posts.map(post => {
          return (
            <FeedOpportunity
              title={post.title}
              company={post.company}
              job_date={post.job_date}
              short_description={post.short_description}
              long_description={post.long_description}
              competences={post.competences}
              exam={post.exam}
              trainings={post.trainings}
            />
          )
        })
      )}
    </Container>
  )
}

export default MiddleColumn
