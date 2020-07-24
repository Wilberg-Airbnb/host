const db = require('./index.js');
const data = require('./data.js');



const insertHosts = () => {

  if(db.Host.count() === 0) {
    db.Host.create(data.generateHosts())
    .catch( (err) => {
      console.log(err);
    });

    
  }
  return db.mongoose.disconnect();

};

insertHosts();
