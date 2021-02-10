/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const router = express.Router()

const Competence = require('../models/Competence')

router.get('/', async (req, res) => {
  try {
    const competences = await Competence.find()
    res.status(200).json(competences)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// CRUD

router.post('/', async (req, res) => {
  try {
    const savedCompetence = await Competence.create({
      title: req.body.title,
      level: req.body.level
    })
    res.status(200).json(savedCompetence)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const competence = await Competence.findOne({ _id: req.params.id })
    res.status(200).json(competence)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const competence = await Competence.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          level: req.body.level
        }
      }
    )
    res.status(200).json(competence)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const competence = await Competence.deleteOne({ _id: req.params.id })
    res.status(200).json(competence)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
