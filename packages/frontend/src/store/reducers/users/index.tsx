import { HYDRATE } from 'next-redux-wrapper'
import { USER_LOGIN, USER_RESET } from '../../actions'

const initialState = {
  id: null,
  name: null,
  surname: null,
  jobTitle: null,
  company: null,
  carrerPath: null,
  jobSituation: null,
  presentationLetter: null,
  competences: null,
  completedTrainings: null,
  suggestedTrainings: null,
  exams: null,
  avatar: {
    avatarStyle: null,
    topType: null,
    accessoriesType: null,
    hairColor: null,
    facialHairType: null,
    clotheType: null,
    eyeType: null,
    eyebrowType: null,
    mouthType: null,
    skinColor: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user }
    case USER_LOGIN:
      return { ...state, ...action.payload }
    case USER_RESET:
      return initialState
    default:
      return state
  }
}

export default reducer
