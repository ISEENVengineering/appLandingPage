const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../src/views/index.html'))
})

module.exports = routes