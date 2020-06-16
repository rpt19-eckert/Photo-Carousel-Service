const nr = require('newrelic');
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const { pool, getMainRouteNum, getMainRouteString, toggleFavorite, recPhotos, insertDataSet, deleteDataSet, updateDataSet } = require('../db/index.js');

const fullPath = '/Users/jasonjacob/Desktop/seniorProjects/rpt19-front-end-capstone/jason_FEC_service/public/index.html';

const client = redis.createClient(REDIS_PORT);

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
///////////////////////////////////////////////
//cache middleware
let cache = function (req, res, next) {
  let id = req.query.listingId;
  client.get(id, (err, data) => {
    if (err) {
      console.log('errrrr')
      throw err;
    }
    if (data != null || data != undefined) {
      console.log('cache', id)
      data =  JSON.parse(data)
      res.send(JSON.stringify(data))
    } else {
      console.log('next', id)
      next()
    }
  })
}

// cache middleware for '/:id/rec-photos'
let cacheQueryEndpoint = function (req, res, next) {
  let id = req.path.split('/')[1];
  if (id === 'rec-photos') {
    id = 10001;
  }
  client.get(id, (err, data) => {
    if (err) {

      console.log('errrrr')
      throw err;
    }
    if (data !== null) {
      console.log('cache', id)
      data =  JSON.parse(data);
      res.send(JSON.stringify(data));
    } else {
      console.log('next', id)
      next()
    }
  })
}
/////////////////////////////////////////////////////////
//routing for recommendation service
app.get('/:id/rec-photos', cacheQueryEndpoint, (req, res, next) => {
  let id = req.path.split('/')[1];
  if (id === 'rec-photos') {
    id = 10001;
  }


  recPhotos(id)
  .then((results) => {
    //console.log('fetching from db', results)
    var stringifyResults = JSON.stringify(results);
    client.setex(id, 1800, stringifyResults);
    // console.log('fetching from db', stringifyResults)
   //console.log('results', results)
    res.end(stringifyResults);

  })
  .catch((err) => {
    console.log('3')
    console.log('error', err);
  });
});
app.get('/:id/listingInfo', (req, res, next) => {
  let id = req.path.split('/')[1];
  if (id === 'rec-photos') {
    id = 10001;
  }
  client.get(id, (err, data) => {
    if (err) {
      throw err;
    }
    if (data !== null) {
      res.end(data)
    } else {
      next()
    }
  })
  recPhotos(id)
  .then((results) => {
   console.log('fetching from db')
    var stringifyResults = JSON.stringify(results.rows);
    console.log('stringidyResults', stringifyResults)
    client.setex(id, 1800, stringifyResults);

   //console.log('results', results)
    res.end(stringifyResults);

  })
  .catch((err) => {
    console.log('3')
    console.log('error', err);
  });
});

//delete a set where id = req.body.id
app.delete('/deleteSet', (req, res) => {
  let id = req.body.listingId;
  console.log('id', id)
  deleteDataSet(id)
  .then((results) => {
    res.end(results);
    console.log('data deleted')
  })
  .catch((err) => {
    console.log('error', err);
  });
});

//post data set, insert data set into db
app.post('/postListingSet', (req, res) => {
  let dataSet = req.body
  //console.log('dataSet', dataSet)
  var arrayOfKeys = [];
  for (var key in dataSet) {
    arrayOfKeys.push(dataSet[key])
  }
  insertDataSet(arrayOfKeys)
  .then((results) => {
    res.end(results);
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
    res.end(results);
    console.log('updated')
  })
  .catch((err) => {
    console.log('err', err);
  });
})


//get product by unique identifier using req object query property.
app.get('/listing-info', cache, (req, res, next) => {
  let id = req.query.listingId;
  // client.get(id, (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   if (data !== null) {
  //     data =  JSON.parse(data)
  //     res.send(JSON.stringify(data))
  //   } else {
  //     next()
  //   }
  // })
  console.log('id', id)
  if (isNaN(Number(id))) {
    //identifier is name
    getMainRouteString(id)
    .then((results) => {
     // console.log('results', results)
      res.json(results);
    })
    .catch((err) => {
      console.log('err', err);
    });
  } else {
    //identifier is lisitng_id
    id = Number(id);
    getMainRouteNum(id)
    .then((results) => {
      console.log('results in server', results)
      var stringifyResults = JSON.stringify(results);
      console.log('stringidyResults', stringifyResults)
      client.setex(id, 1800, stringifyResults);

     //console.log('results', results)
      res.end(stringifyResults);
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