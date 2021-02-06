import { Schema, model } from 'mongoose'

const JobSchema = Schema({
  title: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  trainings: {
    type: [Number],
    required: true
  },
  exam: {
    type: Number,
    required: true
  },
  competences: {
    type: [Number],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default model('Job', JobSchema)
