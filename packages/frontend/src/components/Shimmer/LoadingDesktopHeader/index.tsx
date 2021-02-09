import React from 'react'
import Panel from '../../Panel'
import Skeleton from '../../Skeleton'
import { Container } from './styles'

const LoadingDesktopHeader: React.FC = () => (
  <Container>
    <Panel className='no-shadow'>
      <header>
        <div className='column'>
          <Skeleton className='row-skeleton' />
        </div>
        <Skeleton className='avatar-skeleton' />
        <Skeleton className='avatar-skeleton' />
        <Skeleton className='avatar-skeleton' />
      </header>
    </Panel>
  </Container>
)

export default LoadingDesktopHeader
