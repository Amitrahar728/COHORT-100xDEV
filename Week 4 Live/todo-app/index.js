


// import express from 'express'
const express = require('express')
const app = express()


// this is for get request where whenever the route is \ only it provides us some 
// req(which have client provided body ) and res (which is provided by express ) and we can use res.send to send on frontend .


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})