const mysql = require('mysql');
const fs = require('fs');
const fastcsv = require('fast-csv');

// const stream = fs.createReadStream("/Users/yingwenchen/Desktop/HR project/HR_RPT/SDC/jason_FEC_service/db/exampleData.csv");

const db = mysql.createConnection({
  user: 'root',
  password: 'helloworld',
  database: 'photo_galleryTwo',
});

// let csvData = [];
// let csvStream = fastcsv
// .parse()
// .on('data', function(data) {
//   csvData.push(data);
// })
// .on('end', function () {

// const db = mysql.createConnection({
//   user: 'root',
//   password: 'helloworld',
//   database: 'photo_galleryTwo',
// });
//   db.connect(error => {
//     if (error) {
//       console.error(error);
//     } else {
//       let queryString =  'INSERT INTO photosTwo (listing_Id, listingName, is_favorite, photo1_a, photo1_b, photo1_caption, photo2_a, photo2_b, photo2_caption, photo3_a, photo3_b, photo3_caption, photo4_a, photo4_b, photo4_caption, photo5_a, photo5_b, photo5_caption, photo6_a, photo6_b, photo6_caption, photo7_a, photo7_b, photo7_caption, photo8_a, photo8_b, photo8_caption, photo9_a, photo9_b, photo9_caption, photo10_a, photo10_b, photo10_caption) VALUES ?';

//       db.query(queryString, [csvData], (error, response) => {
//        console.log(error || response)
//       })
//     }
//   })


// })

// stream.pipe(csvStream);







const getMainRouteString = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM PhotosTwo WHERE name='${listingId}'`;
    db.query(queryString, (err, results) => {
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
    db.query(queryString, data, (err, results) => {
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
    db.query(queryString, (err, results) => {
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
    let queryString = `UPDATE PhotosTwo SET ${item} = ${newData} WHERE listing_id=${listingId}`;
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  })
}

const getMainRouteNum = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM PhotosTwo WHERE listing_id=${listingId}`;
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const toggleFavorite = (id) => {
  return new Promise((resolve, reject) => {
    let queryString = `UPDATE PhotosTwo SET is_favorite = 1 - is_favorite WHERE listing_id=${id}`;
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const recPhotos = (listingId) => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT photo1_b, photo2_b, photo3_b, photo4_b, photo5_b, photo6_b, photo7_b, photo8_b, photo9_b, photo10_b, photo11_b, photo12_b, photo13_b, photo14_b, photo15_b, photo16_b, photo17_b, photo18_b, photo19_b, photo20_b, photo21_b, photo22_b, photo23_b, photo24_b, photo25_b, photo26_b, photo27_b, photo28_b, photo29_b, photo30_b FROM Photos WHERE listing_id=${listingId}`;
    db.query(queryString, (err, results) => {
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
  getMainRouteNum,
  toggleFavorite,
  recPhotos,
  insertDataSet,
  deleteDataSet,
  updateDataSet
};