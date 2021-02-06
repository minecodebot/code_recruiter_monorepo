import { Schema, model } from 'mongoose'

const AvatarSchema = Schema({
  avatarStyle: {
    type: String,
    default: 'Circle'
  },
  topType: {
    type: String,
    default: 'ShortHairDreads01'
  },
  accessoriesType: {
    type: String,
    default: 'Prescription02'
  },
  hairColor: {
    type: String,
    default: 'Auburn'
  },
  facialHairType: {
    type: String,
    default: 'BeardMagestic'
  },
  facilHairColor: {
    type: String,
    default: 'Auburn'
  },
  clotheType: {
    type: String,
    default: 'ShirtScoopNeck'
  },
  clothColor: {
    type: String,
    default: 'Heather'
  },
  eyeType: {
    type: String,
    default: 'Wink'
  },
  eyebrowType: {
    type: String,
    default: 'SadConcernedNatural'
  },
  mouthType: {
    type: String,
    default: 'Smile'
  },
  skinColor: {
    type: String,
    default: 'Brown'
  }
})

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  jobTitle: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  carrerPath: {
    type: String,
    default: ''
  },
  jobSituation: {
    type: String,
    default: ''
  },
  presentationLetter: {
    type: String,
    default: ''
  },
  competences: {
    type: [Number],
    default: []
  },
  completedTrainings: {
    type: [Number],
    default: []
  },
  suggestedTrainings: {
    type: [Number],
    default: []
  },
  exams: {
    type: [Number],
    default: []
  },
  avatar: {
    type: AvatarSchema,
    default: () => ({})
  }
})

export default model('User', UserSchema)
