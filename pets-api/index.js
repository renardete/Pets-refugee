const express = require('express')
const app = express()
const {getPets, addPet, delPet} = require('./repositories/petsRepository')
const cors = require('cors')
const port = 8088

const baseDelay = 1000
let delayMultiplier = 1

app.use(express.json())
app.use(cors())
 
app.get('/api/pets', function (req, res) {
  setTimeout(function() {
    pets = getPets();
    res.send(JSON.stringify(pets))
  }, baseDelay + (getRandomArbitrary(500,1200)*delayMultiplier))
  delayMultiplier = delayMultiplier < 3 ? delayMultiplier++ : 1 
})

app.post('/api/pets', function (req, res) {
  setTimeout(function() {
    const pets =  req.body  
    res.status(201).send(JSON.stringify(addPet(pets)))
  }, baseDelay + getRandomArbitrary(500,1500))
})
 
app.delete('/api/pets', function (req, res) {
  setTimeout(function() {
    delPet(req.query.id)
    res.status(200).send()
  }, baseDelay + getRandomArbitrary(200,700))
})

app.listen(port, () => {console.log(`Listening in port: ${port}`)})


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}