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
import { useSelector } from "react-redux";

export interface Props {
  isLoading: boolean
  trainings?: trainingInterface[]
  posts?: postInterface[]
  user?: userInterface
}

const Layout: React.FC<Props> = ({ isLoading, trainings, posts, user }) => {
  const router = useRouter()
  const [ session ] = useSession()

  const me = useSelector((state) => state.user);

  return (
    <Container>
      <DesktopHeader me={me} />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        {router.pathname === '/' ? (
          <>
            <HomeLeftColumn posts={posts} />
            {session && <HomeRightColumn me={me} />}
          </>
        ) : session ? router.pathname === '/exams' ? (
          <ExamsMiddleColumn me={me} />
        ) : router.pathname === '/trainings' ? (
          <TrainingsMiddleColumn me={me} trainings={trainings} />
        ) : router.pathname.includes('/trainings/code') ? (
          <TrainingsCodeMiddleColumn trainings={trainings} />
        ) : router.pathname === '/profile/me' ? (
          <ProfileMeMiddleColumn me={me} />
        ) : router.pathname === '/profile/edit' ? (
          <ProfileEditMiddleColumn me={me} />
        ) : router.pathname.includes('/profile/user/') ? (
          <ProfileIdMiddleColumn user={user}/>
        ) : (
          <></>
        ) : <></>}
      </main>
    </Container>
  )
}

export default Layout
