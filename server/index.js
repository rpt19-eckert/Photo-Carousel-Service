require("dotenv").config();
const nr = require("newrelic");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3002;
const {
  getMainRouteNum,
  getMainRouteString,
  toggleFavorite,
  recPhotos,
  insertDataSet,
  deleteDataSet,
  updateDataSet,
} = require("../db/index.js");

app.use(express.static(__dirname + "/../public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// routing for recommendation service
app.get("/:id/rec-photos", (req, res) => {
  let id = req.path.split("/")[1];
  if (id === "rec-photos") {
    id = 10001;
  }
  recPhotos(id)
    .then((results) => {
      res.status(200).json(results.rows);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "Error fetching photos" });
    });
});

// Get listing information from db
app.get("/listingInfo/:id", (req, res) => {
  let id = req.path.split("/")[1];
  if (id === "rec-photos") {
    id = 10001;
  }
  recPhotos(id)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "Error listing information" });
    });
});

// delete a set where id = req.body.id
app.delete("/deleteSet", (req, res) => {
  let id = req.body.listingId;

  deleteDataSet(id)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

// post data set, insert data set into db
app.post("/postListingSet", (req, res) => {
  let dataSet = req.body;
  let arrayOfKeys = [];
  for (let key in dataSet) {
    arrayOfKeys.push(dataSet[key]);
  }
  insertDataSet(arrayOfKeys)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

// update data set
app.put("/updatePhotoFromId", (req, res) => {
  let id = req.body.listingId;
  let item = req.body.item;
  let newPhoto = req.body.photoUrl;
  updateDataSet(id, item, newPhoto)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

// get product by unique identifier using req object query property.
app.get("/listing-info/:id", (req, res) => {
  let id = req.params;
  if (isNaN(Number(id))) {
    getMainRouteString(id)
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        console.log("err", err);
        res.status(500).json({ error: "Error listing information" });
      });
  } else {
    // identifier is lisitng_id
    id = Number(id);
    getMainRouteNum(id)
      .then((results) => {
        res.send(results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
});

// reload page with product identifier in url
app.use("/:id", express.static(__dirname + "/../public/index.html"));

app.patch("/favorite/:id", (req, res) => {
  let id = req.params;
  toggleFavorite(id)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = app;
