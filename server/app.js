
// loading the module
const express = require('express')
const app = express()

// body parser for parsing JSON
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// importing the movie class from movie.js file
const Movie = require('./movie')

// middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/movies',function(req,res){

  let movies = []

  let movie = new Movie('Lords of Rings',1995)

  movies.push(movie)
  movies.push({title : 'Spiderman'})
  movies.push({title : 'Superman'})

  res.json(movies)

})

app.post('/dishes',function(req,res){

    // get the dish name
    console.log(req.body.name)
    console.log(req.body.price)
    console.log(req.body.course)
    // get the price of the dish
    res.send("Thanks for posting")
})


app.get('/sayhello',function(req,res){
  console.log("Inside sayHello Route")
  res.send("Hello2 To you!")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
