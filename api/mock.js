import express from 'express'

const app = express()

app.get('/items/:page', (req, res) => {
  const page = req.params.page
  res.send(page)
})

export default app
