var express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express app is up and running on ${PORT}`);
});
