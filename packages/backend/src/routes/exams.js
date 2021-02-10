/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const router = express.Router()

const Exam = require('../models/Exam')

router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find()
    res.status(200).json(exams)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// CRUD

router.post('/', async (req, res) => {
  try {
    const savedExam = await Exam.create({
      title: req.body.title,
      level: req.body.level,
      description: req.body.description,
      status: req.body.status
    })
    res.status(200).json(savedExam)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const exam = await Exam.findOne({ _id: req.params.id })
    res.status(200).json(exam)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const exam = await Exam.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          level: req.body.level,
          description: req.body.description,
          status: req.body.status
        }
      }
    )
    res.status(200).json(exam)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const exam = await Exam.deleteOne({ _id: req.params.id })
    res.status(200).json(exam)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
