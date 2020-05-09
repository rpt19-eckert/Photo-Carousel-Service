const mongoose = require('mongoose');
const { MongoClient, Db} = require('mongodb');

const mongoURI = 'mongodb://localhost/photo_gallery';
const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

let photoSchema = mongoose.Schema({
listingId: {type: String, index: true},
is_favorite: Boolean,
imageSets: [{
  photo1_a: String,
  photo1_b: String,
  photo1_caption: String
}]
}, { collection : 'Photos' });



 var Photos = mongoose.model('Photos', photoSchema, "Photos");


let getMainRouteString = (id) => {
  Photos.find({listingId: `${id}`}).exec(function (err, results) {
    if (err) {
      console.log('1')
     callback(err, null);

    }
      console.log('2')
     // console.log('results from db',  results[0])
     callback(null, results[0])

  })
}

// //insert new set of Data into db

const insertDataSet = (data, callback) => {

    Photos.create(newData, function (err) {
      if (err) {
        return handleError(err)
      } else {
        console.log('saved')
      }
    })

}

// //Delete set of Data where id is...

const deleteDataSet = (listingId, callback) => {
  Photos.deleteOne({listingId: `${id}`}).exec(function (err) {
    if (err) {
      console.log('1')
     callback(err, null);

    } else {
      console.log('listing deleted')
      callback()
     // console.log('results from db',  results[0])
    }


  })
}

//update data set
const toggleFavorite = (id, callback) => {
  let newBoolean;
  Photos.find({listingId: `${id}`}).exec(function (err, results) {
    if (err) {
      console.log('err', err);


    } else {
      let newBoolean = results[0].is_favorite
      console.log('newBoolean', newBoolean)
      let filter = { listingId: `${id}` };
      let update = {is_favorite: !newBoolean}
      Photos.findOneAndUpdate(filter, update).exec(function (err, results) {
        if (err) {
          callback(err, null)
          console.log('err', err)
        } else {
          callback(null, results)
          console.log('updated is_Favorite')
        }
      })

    }

     // console.log('results from db',  results[0])
     //callback(null, results[0])

  })

}

const getMainRouteNum = (id, callback) => {
  // console.log('id from getMainROute', id)
  // return new Promise((resolve, reject) => {
    Photos.find({listingId: `${id}`}).exec(function (err, results) {
      if (err) {
        console.log('1')
       callback(err, null);

      }
        console.log('2')
       // console.log('results from db',  results[0])
       callback(null, results[0])


    })


};
//have to fix updateDataSet to update embedded document
// const updateDataSet = (id, item, newPhoto) => {
//   Photos.find({listingId: `${id}`}).exec(function (err, results) {
//     if (err) {
//       console.log('err', err);


//     } else {
//       let photoSetArray = results[0].imageSets
//       console.log('newBoolean', newBoolean)
//       let filter = { listingId: `${id}` };
//       let update = {[item]: !newBoolean}
//       Photos.findOneAndUpdate(filter, update).exec(function (err, results) {
//         if (err) {
//           callback(err, null)
//           console.log('err', err)
//         } else {
//           callback(null, results)
//           console.log('updated is_Favorite')
//         }
//       })

//     }

//      // console.log('results from db',  results[0])
//      //callback(null, results[0])

//   })
// };

// const recPhotos = (listingId) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `SELECT photo1_b, photo2_b, photo3_b, photo4_b, photo5_b, photo6_b, photo7_b, photo8_b, photo9_b, photo10_b, photo11_b, photo12_b, photo13_b, photo14_b, photo15_b, photo16_b, photo17_b, photo18_b, photo19_b, photo20_b, photo21_b, photo22_b, photo23_b, photo24_b, photo25_b, photo26_b, photo27_b, photo28_b, photo29_b, photo30_b FROM Photos WHERE listing_id=${listingId}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// };



module.exports = {
Db,
getMainRouteString,
getMainRouteNum,
insertDataSet,
deleteDataSet,
toggleFavorite

};