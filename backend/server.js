/**
 * npm i express dotenv mongoose colors
 * npm i -D nodemon
 * 
 * npm i express-async-handler
 * 
 * create .gitignore 
 * git init 
 * git add .
 * git commit -m 'duiashd'
 * open github desktok and open local repository. Choose file and publish branch 
 * 
 * npm i jsonwebtoken
 * npm i bcryptjs
 */

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//overwrite default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))