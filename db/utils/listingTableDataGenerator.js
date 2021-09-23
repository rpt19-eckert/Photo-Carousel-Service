const faker = require("faker");
const fs = require("fs");
const file = fs.createWriteStream("./listingTableData.csv");

function createDataSetPerRow(id, queryId) {
  var dataString = "";
  var listingId = id;
  var tableQueryId = queryId;

  for (var i = 0; i < 10; i++) {
    var oneString = `${tableQueryId},${listingId},0`;

    listingId++;
    tableQueryId++;
    dataString += `${oneString} \n`;
  }
  return dataString;
}

function writeStream(num, id) {
  for (var i = 0; i < 1000000; i++) {
    file.write(createDataSetPerRow(num, id));
    num = num + 10;
    id = id + 10;
  }

  file.end();
}

writeStream(10001, 1);
