var express = require('express');
var router = express.Router();

/* GET home page. */


router.get("/movies",(req,res)=>{
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=ee8d063f9e3483140eea927c147ab7fa')
  .then(response => response.json())
  .then(data => {
    res.json({ movies: data });
  });
})

module.exports = router;
