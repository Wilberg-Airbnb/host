const db = require('./index.js');
const data = require('./data.js');



const insertHosts = () => {

    db.Host.create(data.generateHosts())
    .then( () => {
      db.mongoose.disconnect();
    })
    .catch( (err) => {
      console.log(err);
    });

};

insertHosts();
