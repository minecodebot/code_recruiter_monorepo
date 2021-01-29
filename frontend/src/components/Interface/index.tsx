export interface userInterface {
  email: string
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
  competences: number[]
  suggestedTrainings: number[]
  completedTrainings: number[]
  exams: number[]
}

export interface postInterface {
  title: string
  company: string
  job_date: string
  short_description: string
  long_description: string
  competences: number[]
  exam: number
  trainings: number[]
}

export interface trainingInterface {
  id: number
  title: string
  level: string
}

export interface examInterface {
  title: string
  description: string
  date: string
  level: string
  status: string
}
