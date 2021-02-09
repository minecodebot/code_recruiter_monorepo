import React from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Wrapper,
  LinkedInIcon,
  TrainingIcon,
  ExamIcon
} from './styles'
import Avatar from 'avataaars'
import LoadingDesktopHeader from '../Shimmer/LoadingDesktopHeader'
import { userInterface } from '../Interface'
import { useSession, signIn, signOut } from 'next-auth/client'
import { useFetch } from '../../hooks/useFetch'

const Header: React.FC = () => {
  const router = useRouter()
  const [session] = useSession()

  const { data } = useFetch<userInterface>(`users/${session?.user.email}`)
  const me = data

  const handleSignin = e => {
    e.preventDefault()
    signIn()
  }
  const handleSignout = e => {
    e.preventDefault()
    signOut()
  }

  return (
    <Container>
      {me === undefined ? (
        <LoadingDesktopHeader />
      ) : (
        <Wrapper>
          <div
            className='left homeIcon'
            onClick={() => {
              router.push('/')
            }}
          >
            <LinkedInIcon />
          </div>
          {session ? (
            <div className='right'>
              <nav>
                <button
                  onClick={() => {
                    router.push('/trainings')
                  }}
                >
                  <TrainingIcon />
                  <span>Trainings</span>
                </button>

                <button
                  onClick={() => {
                    router.push('/exams')
                  }}
                >
                  <ExamIcon />
                  <span>My Exams</span>
                </button>
                <button
                  onClick={() => {
                    router.push('/profile/me')
                  }}
                >
                  <Avatar
                    avatarStyle={me.avatar.avatarStyle}
                    topType={me.avatar.topType}
                    accessoriesType={me.avatar.accessoriesType}
                    hairColor={me.avatar.hairColor}
                    facialHairType={me.avatar.facialHairType}
                    clotheType={me.avatar.clotheType}
                    eyeType={me.avatar.eyeType}
                    eyebrowType={me.avatar.eyebrowType}
                    mouthType={me.avatar.mouthType}
                    skinColor={me.avatar.skinColor}
                    style={{
                      width: '24px',
                      height: '24px'
                    }}
                  />
                  <span>Me</span>
                </button>
                <a href='#' onClick={handleSignout} className='btn-signin'>
                  Sign out
                </a>
              </nav>
            </div>
          ) : (
            <>
              Not signed in <br />
              <a href='#' onClick={handleSignin} className='btn-signin'>
                Sign in
              </a>
            </>
          )}
        </Wrapper>
      )}
    </Container>
  )
}

export default Header
