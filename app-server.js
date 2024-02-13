const express = require('express')
const app = express()
const path = require('path')
// const favicon = require('serve-favicon')
// const logger = require('morgan')


app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})










module.exports = app