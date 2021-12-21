const path = require('path');
const express = require('express');
const app = express();

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//add routes here:
app.use('/api', require('./api'))


app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public'));
});

//localhost server
const PORT = 8080
app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))

module.exports = app
