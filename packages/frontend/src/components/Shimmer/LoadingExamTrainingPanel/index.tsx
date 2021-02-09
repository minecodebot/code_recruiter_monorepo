import React from 'react'
import Panel from '../../Panel'
import Skeleton from '../../Skeleton'
import { Container } from './styles'

const LoadingExamTrainingPanel: React.FC = () => (
  <Container>
    <Panel className='no-shadow'>
      <header>
        <div className='column'>
          <Skeleton className='row-skeleton' />
          <Skeleton className='row-skeleton' />
        </div>
      </header>
      <header>
        <div className='column'>
          <Skeleton className='row-skeleton' />
          <Skeleton className='row-skeleton' />
        </div>
      </header>
    </Panel>
  </Container>
)

export default LoadingExamTrainingPanel
