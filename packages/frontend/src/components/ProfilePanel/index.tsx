import React from 'react'
import Panel from '../Panel'
import { Container } from './styles'
import Avatar from 'avataaars'
import {
  uniqueNamesGenerator,
  Config,
  names,
  starWars
} from 'unique-names-generator'
import Link from 'next/link'
export interface Props {
  name: string
  surname: string
  company: string
  carrerPath: string
  jobSituation: string
  jobTitle: string
  presentationLetter: string
  avatar: {
    avatarStyle: string
    topType: string
    accessoriesType: string
    hairColor: string
    facialHairType: string
    clotheType: string
    eyeType: string
    eyebrowType: string
    mouthType: string
    skinColor: string
  }
  personalDataHidden?: boolean
  short?: boolean
}

const ProfilePanel: React.FC<Props> = ({
  name,
  surname,
  company,
  carrerPath,
  jobSituation,
  jobTitle,
  presentationLetter,
  avatar,
  personalDataHidden,
  short
}) => {
  const config: Config = {
    dictionaries: [names, starWars],
    length: 2,
    style: 'capital'
  }
  const characterName: string = uniqueNamesGenerator(config) // Winona
  if (personalDataHidden) {
    name = characterName.split('_').join(' ')
    surname = ''
  }

  return (
    <Container>
      <Panel>
        <div className="profile-cover"></div>
        <Avatar
          avatarStyle={avatar.avatarStyle}
          topType={avatar.topType}
          accessoriesType={avatar.accessoriesType}
          hairColor={avatar.hairColor}
          facialHairType={avatar.facialHairType}
          clotheType={avatar.clotheType}
          eyeType={avatar.eyeType}
          eyebrowType={avatar.eyebrowType}
          mouthType={avatar.mouthType}
          skinColor={avatar.skinColor}
          style={{
            width: '92px',
            height: '92px',
            margin: '-38px auto 12px',
            display: 'flex'
          }}
        />
        <h1>
          {name}
          {surname.length > 0 ? ' ' + surname : ''}
        </h1>
        {personalDataHidden ? (
          <></>
        ) : (
          <h2>
            {jobTitle} @ {company}
          </h2>
        )}

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Carrer path</span>
          <span className="value">{carrerPath}</span>
        </div>
        <div className="key-value">
          <span className="key">Job Situation</span>
          <span className="value">{jobSituation}</span>
        </div>

        <div className="separator"></div>
        {short ? (
          <></>
        ) : (
          <>
            <div className="key-value">
              <span className="key">Presentation Letter</span>
              {personalDataHidden ? (
                <span className="value">Formal, Friendly</span>
              ) : (
                <></>
              )}
            </div>
            {personalDataHidden ? (
              <></>
            ) : (
              <div className="key-value">
                <span className="value">{presentationLetter}</span>
              </div>
            )}
          </>
        )}
      </Panel>
    </Container>
  )
}

export default ProfilePanel
