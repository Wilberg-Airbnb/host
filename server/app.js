const express = require('express');
const app = express();
const port = 2000;
const db = require('../database-mongodb/index.js');

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.get('/api/host/:listingId', (req, res) => {

  const listingId = req.params.listingId;
  db.Host.find({listingId})
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    console.log('Did not find listing');
  });

});