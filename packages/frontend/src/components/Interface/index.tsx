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
  id: number
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
  level: number
}

export interface examInterface {
  id: number
  title: string
  level: number
  date: Date
  description: string
  status: string
}

export interface competenceInterface {
  id: number
  title: string
  level: number
}
