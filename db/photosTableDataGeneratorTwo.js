const faker = require ('faker');
const fs = require ('fs');
const file = fs.createWriteStream('./photosTableDataTwo.csv')




function createRandomNum () {
  var randomNumForImageFetch = 100 + Math.floor(Math.random() * 100);
  return randomNumForImageFetch;
}
function createDataSetPerRow (id, queryId, randomNum) {
  var dataString = '';
  var listingId = id;
  var tableQueryId = queryId;
  // var numOfSetOfImages = 5 + Math.floor(Math.random() * 5)

  for (var i = 0; i < randomNum; i++) {

    var randomSentence = faker.lorem.sentence();
    randomSentence = randomSentence.slice(0, 25) + '.';
   var currentListingId = listingId



      for (var j = 0; j < randomNum; j++) {
        var oneString = `${tableQueryId},${currentListingId},`;
        var randomId = createRandomNum();
        var caption = faker.lorem.sentence();
        var largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
        var smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;



          oneString += `${largeImgUrl},${smallImgUrl},${caption}`;

        // if (j === 10) {
        //   oneString.slice(0, -1)
        // }
      }
    //listingId++;
    tableQueryId++;
    dataString += `${oneString} \n`;

  }
  return dataString;

}

function writeStream (num, id) {

  for (var i = 0; i < 5000000; i++) {
    var numOfSetOfImages = 3 + Math.floor(Math.random() * 5)
    file.write(createDataSetPerRow(num, id, numOfSetOfImages))
   num = num+1;
    id = id+numOfSetOfImages;
  }

  file.end();
  }
//console.log(createDataSetPerRow(1000))

writeStream(5010001, 30001831)


