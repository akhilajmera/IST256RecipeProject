var express = require('express');
var router = express.Router();

router.get('/',function(request,response,next){
  response.send("It works");
});

router.post('/',function(request,response,next){
  response.send("It works POSt");
});

router.get('/endpoint',function(request,response,next){
  response.send("endpoint works");
});



module.exports = router;
