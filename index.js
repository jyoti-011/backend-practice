require('dotenv').config()
const express = require('express')
// import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
  })

  app.get('/login', (req, res) => {
    res.send('Hello login!')
  })
  app.get('/head', (req, res) => {
    res.send('<h1>Hello this is experimental head</h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})