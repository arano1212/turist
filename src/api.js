import express from 'express'

const back = express()

back.get('/test', (_req, res) => {
  res.json({
    msg: 'back-end online'
  })
})

export default back
