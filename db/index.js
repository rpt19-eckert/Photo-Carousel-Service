const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'yingwenchen',
  host: 'localhost',
  database: 'photo_gallery',
  port: 5432
})

console.log('runs db file')

const getMainRouteString = (listingId) => {
  console.log('listingId', listingId)
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM PhotosTwo WHERE name='${listingId}'`;
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
    let queryString = `INSERT INTO PhotosTwo SET ?`;
    client.query(queryString, data, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
}

//Delete set of Data where id is...

const deleteDataSet = (listingId) => {
  return new Promise ((resolve, reject) => {
    let queryString = `DELETE FROM PhotosTwo WHERE ID = ${listingId}`;
    client.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
  })
}

//update data set
const updateDataSet = (listingId, item, newData) => {
  return new Promise((resolve, reject) => {
    let queryString = `UPDATE Photostwo SET ${item} = ${newData} WHERE listing_id=${listingId}`;
    client.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  })
}

const getMainRouteNum = (listingId) => {
  console.log('getMainRoute')
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM photostwo WHERE listing_id=${listingId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const toggleFavorite = (id) => {
  return new Promise((resolve, reject) => {
    let queryString = `UPDATE PhotosTwo SET is_favorite = TRUE WHERE listing_id=${id}`;
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
    let queryString = `SELECT photo1_b, photo2_b, photo3_b, photo4_b, photo5_b, photo6_b, photo7_b, photo8_b, photo9_b, photo10_b, photo11_b, photo12_b, photo13_b, photo14_b, photo15_b, photo16_b, photo17_b, photo18_b, photo19_b, photo20_b, photo21_b, photo22_b, photo23_b, photo24_b, photo25_b, photo26_b, photo27_b, photo28_b, photo29_b, photo30_b FROM Photostwo WHERE listing_id=${listingId}`;
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
  updateDataSet
};