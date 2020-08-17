const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// bring routes
const blogRoutes = require('./routes/blog')

// app
const app = express()

// db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
// cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

app.use('/api', blogRoutes)


// routes
app.get('/api', (req, res) => {
    res.json({ time: Date().toString() })
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))