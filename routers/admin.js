"use strict"

let express = require('express')
let router = express.Router()

router.get('/user', function (req, res, next) {
    res.send('ADMIN - User')
})

module.exports = router
