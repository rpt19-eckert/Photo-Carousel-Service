const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const { Photos } = require('../db/index.js');

const fullPath = '/Users/jasonjacob/Desktop/seniorProjects/rpt19-front-end-capstone/jason_FEC_service/public/index.html';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//routing for recommendation service
app.get('/:id/rec-photos', (req, res) => {
  let id = req.path.split('/')[1];
  if (id === 'rec-photos') {
    id = 10001;
  }
  recPhotos(id)
  .then((results) => {
    results = results[0];
    let keys = Object.keys(results);
    let newKey;
    for (let key of keys) {
      if (results[key] === null) {
        delete results[key];
      } else {
        newKey = key.split('_').shift();
        results[newKey] = results[key];
        delete results[key];
      }
  }
    res.send(results);
  })
  .catch((err) => {
    console.log('error', err);
  });
});
//delete a set where id = req.body.id
app.delete('/deleteSet', (req, res) => {
  let id = req.body.listingId;
  console.log('id', id)
  deleteDataSet(id)
  .then((results) => {
    res.send(results);
    console.log('data deleted')
  })
  .catch((err) => {
    console.log('error', err);
  });
});

//post data set, insert data set into db
app.post('/postListingSet', (req, res) => {
  let dataSet = req.body
  console.log('dataSet', dataSet)
  insertDataSet(dataSet)
  .then((results) => {
    res.send(results);
    console.log('posted')
  })
  .catch((err) => {
    console.log('error', err);
  });
})

//update data set
app.put('/updatePhotoFromId', (req, res) => {
   let id = req.body.listingId;
   let item = req.body.item;
   let newPhoto = req.body.photoUrl;
   updateDataSet(id, item, newPhoto)
   .then((results) => {
    res.send(results);
    console.log('updated')
  })
  .catch((err) => {
    console.log('err', err);
  });
})


//get product by unique identifier using req object query property.
app.get('/listing-info', (req, res) => {
  let id = req.query.listingId;
  console.log('id', id)
  if (isNaN(Number(id))) {
    //identifier is name
    getMainRouteString(id)
    .then((results) => {
     // console.log('results', results)
      res.send(results);
    })
    .catch((err) => {
      console.log('err', err);
    });
  } else {
    //identifier is lisitng_id
    id = Number(id);
    getMainRouteNum(id)
    .then((results) => {
     // console.log('results', results)
      res.send(results);
    })
    .catch((err) => {
      console.log('error', err);
    });
  }
});

// reload page with product identifier in url
app.use('/:id', express.static(__dirname + '/../public/index.html'));

app.patch('/favorite', (req, res) => {
  let id = req.body.listingId;
  console.log('id', id)
  toggleFavorite(id)
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    console.log('error', err);
  });
});

module.exports = app;