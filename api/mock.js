import express from 'express'

const app = express()

app.get('/items/:page', (req, res) => {
  const page = Number(req.params.page)
  res.json({
    data: items({ page })
  })
})

const items = ({ page, count = 10 }) => {
  const res = [];
  const start = (page - 1) * count + 1
  const end = page * count
  for (let i = start; i <= end; i++) {
    res.push({
      id: i,
      name: `何かのタイトル${i}`
    })
  }
  return res
}

export default app
