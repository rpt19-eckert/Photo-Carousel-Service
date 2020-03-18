const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'photo_gallery',
});

const getMainRouteString = (id) => {
  return new Promise((resolve, reject) => {
    let select_query_name = `SELECT * FROM Photos WHERE name='${id}'`;
    db.query(select_query_name, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const getMainRouteNum = (id) => {
  return new Promise((resolve, reject) => {
    let select_query_name = `SELECT * FROM Photos WHERE listing_id=${id}`;
    db.query(select_query_name, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};


module.exports = {
  db,
  getMainRouteString,
  getMainRouteNum
};