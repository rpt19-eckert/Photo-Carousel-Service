const faker = require ('faker');
const fs = require ('fs');
const file = fs.createWriteStream('./exampleDataTwo.csv')




function createRandomNum () {
  var randomNumForImageFetch = 100 + Math.floor(Math.random() * 100);
  return randomNumForImageFetch;
}
function createDataSetPerRow (id, queryId) {
  var dataString = '';
  var listingId = id;
  var tableQueryId = queryId;

  for (var i = 0; i < 10; i++) {

    var randomSentence = faker.lorem.sentence();
    var listingName =  randomSentence.split(' ').join('_').slice(0, -1);
    var numOfSetOfImages = 5 + Math.floor(Math.random() * 5)

    var oneString = `${tableQueryId},${listingId},${listingName},0,`;

      for (var j = 0; j < 10; j++) {
        var randomId = createRandomNum();
        var caption = faker.lorem.sentence();
        var largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
        var smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;


        if (j < numOfSetOfImages) {
          oneString += `${largeImgUrl},${smallImgUrl},${caption},`;
        } else if (j === numOfSetOfImages){
          oneString += `${largeImgUrl},${smallImgUrl},${caption}`;
        } else {
          oneString += `,${null},${null},${null}`;
        }
        // if (j === 10) {
        //   oneString.slice(0, -1)
        // }
      }
    listingId++;
    tableQueryId++;
    dataString += `${oneString} \n`;

  }
  return dataString;

}

function writeStream (num, id) {

  for (var i = 0; i < 1; i++) {
    file.write(createDataSetPerRow(num, id))
    num = num+10;
    id = id+10;
  }

  file.end();
  }
//console.log(createDataSetPerRow(1000))

writeStream(10001, 1)


