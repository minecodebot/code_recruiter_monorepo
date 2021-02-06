import { Router } from 'express'
const router = Router()

import { find, create, findOne, updateOne, deleteOne } from '../models/User'

router.get('/', async (req, res) => {
  try {
    const users = await find()
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// CRUD

router.post('/', async (req, res) => {
  try {
    const savedUser = await create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email
    })
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/:email', async (req, res) => {
  try {
    const user = await findOne({ email: req.params.email })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.put('/:email', async (req, res) => {
  try {
    const user = await updateOne(
      { email: req.params.email },
      {
        $set: {
          name: req.body.name,
          surname: req.body.surname,
          jobTitle: req.body.jobTitle,
          company: req.body.company,
          carrerPath: req.body.carrerPath,
          jobSituation: req.body.jobSituation,
          presentationLetter: req.body.presentationLetter,
          avatar: req.body.avatar
        }
      }
    )
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.delete('/:email', async (req, res) => {
  try {
    const user = await deleteOne({ email: req.params.email })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

export default router
