const express = require('express')
const { add_task_controller } = require('./controllers/task.controllers')
const router = express.Router()

router.post ('/add_task', add_task_controller)

module.exports = router;