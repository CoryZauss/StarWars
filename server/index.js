const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const axios = require('axios')

app.use(express.json());
app.use(express.static('client/dist'));

const serverCache = {};

//handle any endpoint for the swapi and cache the request
app.get('/api', (req, res) => {
  let url = req.query['0'];
  console.log(url)
  if (serverCache[url]) {
    res.send(serverCache[url])
  } else {
    axios.get(url)
      .then(response => {
        res.send(response.data)
        serverCache[url] = response.data
      })
      .catch(err => console.log(err))
  }
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})




