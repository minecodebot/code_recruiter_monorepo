import { Router } from 'express'
const router = Router()

import { find, create, findOne, updateOne, deleteOne } from '../models/Job'

router.get('/', async (req, res) => {
  try {
    const jobs = await find()
    res.status(200).json(jobs)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// CRUD

router.post('/', async (req, res) => {
  try {
    const savedJob = await create({
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      longDescription: req.body.longDescription,
      trainings: req.body.trainings,
      exam: req.body.exam,
      competences: req.body.competences
    })
    res.status(200).json(savedJob)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const job = await findOne({ _id: req.params.id })
    res.status(200).json(job)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const job = await updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          shortDescription: req.body.shortDescription,
          longDescription: req.body.longDescription,
          trainings: req.body.trainings,
          exam: req.body.exam,
          competences: req.body.competences
        }
      }
    )
    res.status(200).json(job)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const job = await deleteOne({ _id: req.params.id })
    res.status(200).json(job)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

export default router
