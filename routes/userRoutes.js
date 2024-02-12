const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.post('/', userCtrl.createUser)

router.post('/login', userCtrl.loginUser)

