const express = require('express');
const app = express();
const db = require('../database-mongodb/index.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//use this if using params for url
// app.use(express.static('./public'));

//to match with other microservices
app.use('/:listingId', express.static('public'));


app.get('/api/host/:listingId', (req, res) => {

  const listingId = req.params.listingId;
  console.log( listingId);
  db.Host.find({listingId})
  .then((data) => {
    res.status(200);
    res.json(data[0]);
  })
  .catch((err) => {
    console.log('Did not find listing');
  });

});

module.exports = app;