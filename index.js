var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Vehicle = require('./app/models/vehicle')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 5000

mongoose.connect('mongodb://localhost:27017/myCars')

var router = express.Router();

app.use('/api', router)

router.get('/', (req, res) => {
res.send({message:'hello'})
})

router.post('/vehicle', (req, res) => {
    const { make, model, color } = req.body
    const vehicle = new Vehicle()
    vehicle.make = make
    vehicle.model = model
    vehicle.color = color
    vehicle.save().then((val) => {
        res.send({message : 'Vehicle added successfully', val})
    }).catch(e => {
        res.send({error: e})
    })
})

app.listen(port)

console.log(`server listening on port ${port}`)