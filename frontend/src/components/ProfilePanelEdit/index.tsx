import React, { useState } from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container } from './styles'
import Button from '../Button'
import Avatar from 'avataaars'
import Modal from 'react-modal'
import api from '../../services/api'
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from '../../store/actions/users'

export interface Props {
  id: string
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
  },
  competences: number[]
  completedTrainings: number[]
  suggestedTrainings: number[]
  exams: number[]
}

const ProfilePanelEdit: React.FC<Props> = ({
  id,
  name,
  surname,
  company,
  carrerPath,
  jobSituation,
  jobTitle,
  presentationLetter,
  avatar,
  competences,
  completedTrainings,
  suggestedTrainings,
  exams
}) => {

  const router = useRouter()

  const [modalIsOpen, setIsOpen] = useState(false)
  const [me, setMe] = useState({
    name: name,
    surname: surname,
    jobTitle: jobTitle,
    company: company,
    carrerPath: carrerPath,
    jobSituation: jobSituation,
    presentationLetter: presentationLetter,
    competences: competences,
    completedTrainings: completedTrainings,
    suggestedTrainings: suggestedTrainings,
    exams: exams,
    avatar: {
      avatarStyle: avatar.avatarStyle,
      topType: avatar.topType,
      accessoriesType: avatar.accessoriesType,
      hairColor: avatar.hairColor,
      facialHairType: avatar.facialHairType,
      clotheType: avatar.clotheType,
      eyeType: avatar.eyeType,
      eyebrowType: avatar.eyebrowType,
      mouthType: avatar.mouthType,
      skinColor: avatar.skinColor
    }
  });

  const [ requestCompleted, setRequestCompleted ] = useState(false)

  if (me && requestCompleted) {
    const dispatch = useDispatch()
    dispatch(userLogin(me))
    setRequestCompleted(false)
  }

  const handleSubmit = async event => {
    event.preventDefault();
    await api.put(`http://localhost:3030/users/${id}`, {
      avatar: me.avatar,
      name: me.name,
      surname: me.surname,
      carrerPath: me.carrerPath,
      company: me.company,
      jobSituation: me.jobSituation,
      jobTitle: me.jobTitle,
      presentationLetter: me.presentationLetter
    }).then(response => {
      console.log(response)
      setRequestCompleted(true)
      router.push('/profile/me')
    }).catch(error => {
      console.log(error)
    })
  }

  const handleChange = event => {
    setMe({ ...me, [event.target.id]: event.target.value });
  }

  const customStyles = {
    content: {
      backgroundColor: 'var(--color-medium)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  const avatars = [
    {
      avatarStyle: 'Circle',
      topType: 'LongHairStraight',
      accessoriesType: 'Blank',
      hairColor: 'BrownDark',
      facialHairType: 'Blank',
      clotheType: 'BlazerShirt',
      eyeType: 'Default',
      eyebrowType: 'Default',
      mouthType: 'Default',
      skinColor: 'Light'
    },
    {
      avatarStyle: 'Circle',
      topType: 'Eyepatch',
      accessoriesType: 'Round',
      hairColor: 'Black',
      facialHairType: 'Blank',
      facialHairColor: 'Black',
      clotheType: 'ShirtCrewNeck',
      clotheColor: 'Black',
      eyeType: 'Happy',
      eyebrowType: 'Default',
      mouthType: 'Twinkle',
      skinColor: 'Tanned'
    },
    {
      avatarStyle: 'Circle',
      topType: 'ShortHairDreads01',
      accessoriesType: 'Prescription02',
      hairColor: 'Auburn',
      facialHairType: 'BeardMagestic',
      facialHairColor: 'Auburn',
      clotheType: 'ShirtScoopNeck',
      clotheColor: 'Heather',
      eyeType: 'Wink',
      eyebrowType: 'SadConcernedNatural',
      mouthType: 'Smile',
      skinColor: 'Brown'
    },
    {
      avatarStyle: 'Circle',
      topType: 'ShortHairTheCaesarSidePart',
      accessoriesType: 'Blank',
      hairColor: 'BlondeGolden',
      facialHairType: 'BeardMedium',
      facialHairColor: 'BrownDark',
      clotheType: 'ShirtCrewNeck',
      clotheColor: 'PastelOrange',
      eyeType: 'EyeRoll',
      eyebrowType: 'RaisedExcited',
      mouthType: 'Tongue',
      skinColor: 'Black'
    },
    {
      avatarStyle: 'Circle',
      topType: 'LongHairFroBand',
      accessoriesType: 'Wayfarers',
      hairColor: 'Auburn',
      facialHairType: 'BeardLight',
      facialHairColor: 'Black',
      clotheType: 'BlazerShirt',
      clotheColor: 'White',
      eyeType: 'Default',
      eyebrowType: 'SadConcernedNatural',
      mouthType: 'Sad',
      skinColor: 'Tanned'
    }
  ]

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false)
        }}
        contentLabel="Modal"
        style={customStyles}
      >
        {avatars.map(element => {
          return (
            <button
              className="profile-picture"
              id="avatar"
              onClick={() => {
                const event = {
                  target: {
                    id: 'avatar',
                    value: element
                  }
                }
                handleChange(event)
                setIsOpen(false)
              }}
            >
              <Avatar
                avatarStyle={element.avatarStyle}
                topType={element.topType}
                accessoriesType={element.accessoriesType}
                hairColor={element.hairColor}
                facialHairType={element.facialHairType}
                clotheType={element.clotheType}
                eyeType={element.eyeType}
                eyebrowType={element.eyebrowType}
                mouthType={element.mouthType}
                skinColor={element.skinColor}
              />
            </button>
          )
        })}
      </Modal>
      <form onSubmit={handleSubmit}>
        <Panel>
          <div className="profile-cover"></div>
          <button
            type="button"
            className="profile-picture"
            onClick={() => {
              setIsOpen(true)
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
            />
          </button>
          <div className="key-value">
            <label htmlFor="name" className="key">
              Name:
            </label>
            <input
              type="text"
              className="value"
              id="name"
              defaultValue={name}
              onChange={handleChange}
            />
          </div>

          <div className="key-value">
            <label htmlFor="surname" className="key">
              Surname:
            </label>
            <input
              type="text"
              className="value"
              id="surname"
              defaultValue={surname}
              onChange={handleChange}
            />
          </div>

          <div className="key-value">
            <label htmlFor="jobTitle" className="key">
              Job title:
            </label>
            <input
              type="text"
              className="value"
              id="jobTitle"
              defaultValue={jobTitle}
              onChange={handleChange}
            />
          </div>

          <div className="key-value">
            <label htmlFor="company" className="key">
              Company:
            </label>
            <input
              type="text"
              className="value"
              id="company"
              defaultValue={company}
              onChange={handleChange}
            />
          </div>

          <div className="separator"></div>

          <div className="key-value">
            <label htmlFor="carrerPath" className="key">
              Carrer Path:
            </label>
            <select id="carrerPath" className="value" onChange={handleChange} defaultValue={me.carrerPath}>
              <option value="Frontend">
                Frontend
              </option>
              <option value="Backend">
                Backend
              </option>
              <option value="Fullstack">
                Fullstack
              </option>
              <option
                value="Software Engineer"
              >
                Software Engineer
              </option>
            </select>
          </div>
          <div className="key-value">
            <label htmlFor="jobSituation" className="key">
              Job Situation:
            </label>
            <select id="jobSituation" className="value" onChange={handleChange} defaultValue={me.jobSituation}>
              <option
                value="Open to new opportunity"
              >
                Open to new opportunity
              </option>
              <option
                value="Itensive searching"
              >
                Itensive searching
              </option>
              <option
                value="Not available to new opportunity"
              >
                Not available to new opportunity
              </option>
            </select>
          </div>

          <div className="separator"></div>

          <div className="key-value">
            <label htmlFor="selftPresentationLetter" className="key">
              Self presentation letter:
            </label>
          </div>
          <div className="key-value">
            <textarea
              className="value value-all"
              id="presentationLetter"
              defaultValue={presentationLetter}
              onChange={handleChange}
            />
          </div>
        </Panel>
        <button type="button">
          <Button type="save" />
        </button>
      </form>
    </Container>
  )
}

export default ProfilePanelEdit
