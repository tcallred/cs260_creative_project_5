var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/canvasDB', { useMongoClient: true });

var canvasSchema = mongoose.Schema({
Name: String,
Image: [] 

});

var Canvas = mongoose.model('Canvas', canvasSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});



router.post('/canvases', function(req, res, next) {
console.log("post route");
   var newcanvas = new Canvas(req.body);
   console.log(newcanvas);
   newcanas.save(function(err, post) {
     if (err) return console.error(err);
     console.log(post);
     res.sendStatus(200); 
  
  });

});

router.get('/canvases', function(req, res, next) {

    Canvas.find(function(err, canvasList) {
     if (err) return console.error(err);
     else {
       console.log(canvasList);
       res.json(canvasList);
    }
  })


});


module.exports = router;
