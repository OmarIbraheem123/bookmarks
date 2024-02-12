const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../controller/bookmarks')

//Index
router.get('/', bookmarkCtrl.index, bookmarkCtrl.jsonbokmarks)
//Create
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonbokmarks)
//Delete
router.delete('/', bookmarkCtrl.destory, bookmarkCtrl.jsonbokmarks)
//Update
router.put('/', bookmarkCtrl.update, bookmarkCtrl.jsonbokmarks)

module.exports = router