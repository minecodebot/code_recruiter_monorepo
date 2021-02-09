import { USER_LOGIN, USER_RESET } from '..'

export const userLogin = (user: {
  name: string
  surname: string
  jobTitle: string
  company: string
  carrerPath: string
  jobSituation: string
  presentationLetter: string
  competences: number[]
  completedTrainings: number[]
  suggestedTrainings: number[]
  exams: number[]
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
}) => ({
  type: USER_LOGIN,
  payload: user
})

export const userReset = () => ({
  type: USER_RESET
})
