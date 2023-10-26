var express = require('express');
var app = express();
var fs = require("fs");
var movie = {
   "movie7" : {
      "Title" : "The Dark Knight Rises",
      "Actor" : "Christian Bale",
      "Genre":"Action, Drama, Triller",
      "Link":"https://www.imdb.com/title/tt1345836/?ref_=chttp_t_70",
      "id": 7
    }
}
//Show the list of Films
app.get('/getFilms', function (req, res) {
   fs.readFile( __dirname + "/" + "films.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
//Add Film
app.post('/addFilm', function (req, res) {
    // First read existing movie.
    fs.readFile( __dirname + "/" + "films.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["movie7"] = movie["movie7"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
})
//Show specific Movie
app.get('/getFilm/:id', function (req, res) {
    // First read existing movie.
    fs.readFile( __dirname + "/" + "films.json", 'utf8', function (err, data) {
       var movies = JSON.parse( data );
       var movie = movies["movie" + req.params.id];
       console.log( movie );
       res.end( JSON.stringify(movie));
    });
})
//delete specific Movie
app.delete('/deleteFilm/:id', function (req, res) {
    // First read existing movie.
    fs.readFile( __dirname + "/" + "films.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["movie" + req.params.id];
       console.log( data );
       res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Movie app listening at http://%s:%s", host, port);
})
