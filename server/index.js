const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const axios = require('axios')

app.use(express.json());
app.use(express.static('client/dist'));

const serverCache = {};

app.get('/api/people', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/planets/*', (req, res) => {
  if (serverCache[req.url]) {
    res.send(serverCache[req.url])
  } else {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => {
        console.log(req.url)
        res.send(response.data)
        serverCache[req.url] = response.data
      })
      .catch(err => console.log(err))
  }
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



