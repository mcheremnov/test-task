const express = require('express')
const router = express.Router()


router.use('/api/v1/employees', require('./employee.routes.js'))

module.exports = router
