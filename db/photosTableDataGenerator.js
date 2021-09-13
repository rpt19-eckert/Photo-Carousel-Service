const faker = require("faker");
const fs = require("fs");
const file = fs.createWriteStream("./photosTableDataOne.csv");

function createRandomNum() {
  let randomNumForImageFetch = 100 + Math.floor(Math.random() * 100);
  return randomNumForImageFetch;
}
function createDataSetPerRow(id, queryId, randomNum) {
  let dataString = "";
  let listingId = id;
  let tableQueryId = queryId;

  for (let i = 0; i < randomNum; i++) {
    let randomSentence = faker.lorem.sentence();
    randomSentence = randomSentence.slice(0, 25) + ".";
    let currentListingId = listingId;

    for (let j = 0; j < randomNum; j++) {
      let oneString = `${tableQueryId},${currentListingId},`;
      let randomId = createRandomNum();
      let caption = faker.lorem.sentence();
      let largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
      let smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;

      oneString += `${largeImgUrl},${smallImgUrl},${caption}`;
    }

    tableQueryId++;
    dataString += `${oneString} \n`;
  }
  return dataString;
}

function writeStream(num, id) {
  for (let i = 0; i < 5000000; i++) {
    let numOfSetOfImages = 3 + Math.floor(Math.random() * 5);
    file.write(createDataSetPerRow(num, id, numOfSetOfImages));
    num = num + 1;
    id = id + numOfSetOfImages;
  }

  file.end();
}
//console.log(createDataSetPerRow(1000))

writeStream(10001, 1);
