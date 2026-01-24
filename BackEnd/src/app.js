const express = require('express')
const cors = require('cors')
const aiRoutes = require('./routes/ai.routes.js')

const app = express()

// Middleware
app.use(cors())
app.use(express.json({ limit: '10mb' }))

// Routes
app.use('/api', aiRoutes)

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'AI Code Reviewer API is running' })
})

module.exports = app
