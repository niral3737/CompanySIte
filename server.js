var express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.NODE_PORT || 3000;
var app = express();

app.use(express.static('public'));

app.get('/health', function (req, res) {
  res.status(200);
});

app.listen(PORT, function () {
  console.log(`Express app is up and running on ${PORT}`);
});
