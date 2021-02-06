import express from 'express'
import { connect } from 'mongoose'
import { json } from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(json())
var corsOptions = {
  origin: `${process.env.URL_ORIGIN}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// Import routes
import jobsRoute from './src/routes/jobs'
app.use('/jobs', jobsRoute)

import usersRoute from './src/routes/users'
app.use('/users', usersRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are on home page!')
})

// How to we start listening to the server
app.listen(3030)

// Replace the uri string with your MongoDB deployment's connection string.
connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true
})
  .then(response => {
    console.log(response)
    console.log('Connected to DB!')
  })
  .catch(err => console.log(err))
