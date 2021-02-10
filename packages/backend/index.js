/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const listEndpoints = require('express-list-endpoints')

const app = express()
app.use(bodyParser.json())
var corsOptions = {
  origin: `${process.env.URL_ORIGIN}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// Import routes
const jobsRoute = require('./src/routes/jobs')
app.use('/jobs', jobsRoute)

const usersRoute = require('./src/routes/users')
app.use('/users', usersRoute)

const examsRoute = require('./src/routes/exams')
app.use('/exams', examsRoute)

const competencesRoute = require('./src/routes/competences')
app.use('/competences', competencesRoute)

const trainingsRoute = require('./src/routes/trainings')
app.use('/trainings', trainingsRoute)

// Routes
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// How to we start listening to the server
app.listen(3030)

// Replace the uri string with your MongoDB deployment's connection string.
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log(response)
    console.log('Connected to DB!')
  })
  .catch(err => console.log(err))
