const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.use(express.json());
app.use(express.static('client/dist'));

const serverCache = {};

app.get('/api/people', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/planets', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/films', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/species', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/starships', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/vehicles', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})



