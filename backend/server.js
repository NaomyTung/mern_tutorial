/**
 * npm i express dotenv mongoose colors
 * npm i -D nodemon
 * 
 * npm i express-async-handler
 */

const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

//overwrite default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))