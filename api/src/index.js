require('dotenv').config()

const cors = require('cors')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'myrarestore-api',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/products', (_req, res) => {
  res.json([
    { id: 1, name: 'Sample Product', price: 999 },
    { id: 2, name: 'Rare Collectible', price: 4999 },
  ])
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
