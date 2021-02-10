/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

const ExamSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Exam', ExamSchema)
