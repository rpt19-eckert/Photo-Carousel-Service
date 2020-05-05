const faker = require ('faker');
const fs = require ('fs');
const file = fs.createWriteStream('./exampleData.csv')




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


    var oneString = `${tableQueryId},${listingId},${listingName},0,`;

      for (var j = 0; j < 10; j++) {
        var randomId = createRandomNum();
        var caption = faker.lorem.sentence();
        var largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
        var smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;

        if (j === 9) {
          oneString += `${largeImgUrl},${smallImgUrl},${caption}`;
        } else {
          oneString += `${largeImgUrl}, ${smallImgUrl}, ${caption},`;
        }
      }
    listingId++;
    tableQueryId++;
    dataString += `${oneString} \n`;

  }
  return dataString;

}

function writeStream (num, id) {

  for (var i = 0; i < 500000; i++) {
    file.write(createDataSetPerRow(num, id))
    num = num+10;
    id = id+10;
  }

  file.end();
  }
//console.log(createDataSetPerRow(1000))

writeStream(10001, 1)


