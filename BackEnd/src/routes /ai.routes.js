const express = require('express')
const router = express.Router()
const aiController = require('../controllers/ai.controller.js')  // Add .js
router.post("/get-review", aiController.getReview)
//router.post('/review', aiController.reviewCode)

module.exports = router
