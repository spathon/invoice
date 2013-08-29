
var fs = require('fs');



exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.partials = function(req, res){
  var partial = req.params.partial;
  var files = fs.readdirSync('./views/partials/');
  if(files.indexOf(partial +'.jade') !== -1){
    res.render('partials/'+ partial);
  }else{
    res.send(404, 'The partial don\'t exsist');
  }
};
