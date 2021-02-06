import React from 'react'
import HomeLeftColumn from './Home/LeftColumn'
import HomeRightColumn from './Home/RightColumn'
import ExamsMiddleColumn from './Exams/MiddleColumn'
import TrainingsMiddleColumn from './Trainings/MiddleColumn'
import TrainingsCodeMiddleColumn from './TrainingsCode/MiddleColumn'
import ProfileMeMiddleColumn from './Profile/Me/MiddleColumn'
import ProfileIdMiddleColumn from './Profile/Id/MiddleColumn'
import ProfileEditMiddleColumn from './Profile/Edit/MiddleColumn'
import DesktopHeader from '../DesktopHeader'
import AdBanner from '../AdBanner'
import { Container } from './styles'
import { useRouter } from 'next/router'
import { userInterface, trainingInterface, postInterface } from '../Interface'
import { useSession } from 'next-auth/client'
import { useSelector } from 'react-redux'
import { storeWrapper } from './../../store'
import { useFetch } from '../../hooks/useFetch'

export interface Props {
  session: {
    user: userInterface
  }
  isLoading: boolean
  trainings?: trainingInterface[]
  posts?: postInterface[]
  user?: userInterface
}

const Layout: React.FC<Props> = ({
  session,
  isLoading,
  trainings,
  posts,
  user
}) => {
  const router = useRouter()

  return (
    <Container>
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        {router.pathname === '/' && <HomeLeftColumn posts={posts} />}
        {session !== null ? (
          <>
            {router.pathname === '/' && <HomeRightColumn />}
            {router.pathname === '/exams' && <ExamsMiddleColumn />}
            {router.pathname === '/trainings' && (
              <TrainingsMiddleColumn trainings={trainings} />
            )}
            {router.pathname.includes('/trainings/code') && (
              <TrainingsCodeMiddleColumn trainings={trainings} />
            )}
            {router.pathname === '/profile/me' && <ProfileMeMiddleColumn />}
            {router.pathname === '/profile/edit' && <ProfileEditMiddleColumn />}
            {router.pathname.includes('/profile/user/') && (
              <ProfileIdMiddleColumn user={user} />
            )}
          </>
        ) : (
          <></>
        )}
      </main>
    </Container>
  )
}

export default Layout
