/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

const TrainingSchema = mongoose.Schema({
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
  }
})

module.exports = mongoose.model('Training', TrainingSchema)
