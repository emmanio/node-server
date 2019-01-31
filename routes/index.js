const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { cat: '[^._.^]ﾉ彡' })
})

module.exports = router