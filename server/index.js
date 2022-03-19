const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const axios = require('axios')

app.use(express.json());
app.use(express.static('client/dist'));

const serverCache = {};

//handle any endpoint for the swapi and cache the request
app.get('/api/*', (req, res) => {
  console.log(req.url)
  if (serverCache[req.url]) {
    res.send(serverCache[req.url])
  } else {
    axios.get(`https://swapi.dev/${req.url}`)
      .then(response => {
        console.log(req.url)
        res.send(response.data)
        serverCache[req.url] = response.data
      })
      .catch(err => console.log(err))
  }
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})




