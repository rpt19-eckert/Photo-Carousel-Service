require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER,
  host: "localhost",
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

/**
 * Gets details for a listing
 * @param {Number} listingId
 * @returns {Promise->Array|Object}: promise which resolves to array of review data
 */

const getMainRouteString = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM Photos WHERE listingId='${listingId}'`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
//insert new set of Data into db

const insertDataSet = (data) => {
  return new Promise((resolve, reject) => {
    // let queryString = `INSERT INTO Photos SET ?`;
    var query = {
      text: "INSERT INTO Photos(id, listing_id, photo_a, photo_b, photo_caption) VALUES($1, $2, $3, $4, $5)",
      values: data,
    };
    pool.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

//Delete set of Data where id is...

const deleteDataSet = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `DELETE FROM Photos WHERE ID = ${listingId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

//update data set
const updateDataSet = (listingId, item, newData) => {
  return new Promise((resolve, reject) => {
    let queryString = `UPDATE Photos SET ${item} = ${newData} WHERE listing_id=${listingId}`;
    client.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const getMainRouteNum = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM photos WHERE listing_id=${listingId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results.rows);
    });
  });
};

const toggleFavorite = (id) => {
  return new Promise((resolve, reject) => {
    let queryString = `UPDATE Listings SET is_favorite = TRUE WHERE listing_id=${id}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const recPhotos = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM photos WHERE listing_id=${listingId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  pool,
  getMainRouteString,
  getMainRouteNum,
  toggleFavorite,
  recPhotos,
  insertDataSet,
  deleteDataSet,
  updateDataSet,
};
