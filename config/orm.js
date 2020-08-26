const connection = require('./connection.js');

const orm = {
  selectAll() {
    const queryString = 'select * from burgers';
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne() {
    const queryString = 'insert into burgers (';
    console.log(queryString);
    connection.query(queryString, [], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne() {
    const queryString = '';
    connection.query(queryString, [], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },

};

module.exports = orm;
