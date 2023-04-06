var express = require('express');

var app = express();

let mainRoutes = require('./routes/mainRoutes.js');

app.use(express.static('./public'));

app.set('view engine','ejs');

app.use('/',mainRoutes);

app.listen(3000, function() {
  console.log('corriendo en  el puerto 3000');
});





