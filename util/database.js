const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

//Connecting and storing the connection to the db
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://root:inCR7diB%23LE@cluster0-uclka.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      // Connection is stored in db variable
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

//Return access to the connected database
const getDb = () => {
  if (_db) { // If the connection is set return the connection
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
