const path = require('path');
const express = require('express');
const app = express();

const volleyball = require('volleyball')

const bodyParser = require('body-parser');

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//body-parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add routes here:
app.use('/api', require('./api'))


//for requests that don't match api routes
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public'));
});

//localhost server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`serving up preposterously on port ${PORT}`))


app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app
