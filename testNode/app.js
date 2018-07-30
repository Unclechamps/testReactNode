const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const app = express()

let models = require('./models')

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send({error: true, message: "Hello"}))

// Getting database information //

app.get('/movies', (req,res) => {

    models.Movie.findAll()
      .then( products => products = res.status(200).json(products))
})


// Add Movie

app.post('/add-movie', (req,res) => {
  let movie = req.body;
  models.Movie.create(movie)
  .then(() => res.send({ message : "Success"})
)
})

// Delete Movie

app.delete('/movies/:movieId', (req,res) => {
    let movieId = req.params.movieId
    models.Movie.destroy({
    where: {
      id : movieId
    }
  }).then(() => res.send({ message : "Success"})
)})


app.listen(3001, () => console.log('Example app listening on port 3001!'))
