/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const router = express.Router()

const Training = require('../models/Training')

router.get('/', async (req, res) => {
  try {
    const trainings = await Training.find()
    res.status(200).json(trainings)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// CRUD

router.post('/', async (req, res) => {
  try {
    const savedTraining = await Training.create({
      title: req.body.title,
      level: req.body.level
    })
    res.status(200).json(savedTraining)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const training = await Training.findOne({ _id: req.params.id })
    res.status(200).json(training)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const training = await Training.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          level: req.body.level
        }
      }
    )
    res.status(200).json(training)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const training = await Training.deleteOne({ _id: req.params.id })
    res.status(200).json(training)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
