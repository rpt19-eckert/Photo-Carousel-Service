const faker = require ('faker');
const fs = require ('fs');
const file = fs.createWriteStream('./exampleData.json')




function createRandomNum () {
  var randomNumForImageFetch = 100 + Math.floor(Math.random() * 100);
  return randomNumForImageFetch;
}
function createDataSetPerRow (id) {
  var dataArray = [];
  var listingId = id;
  //var tableQueryId = queryId;

  for (var i = 0; i < 10; i++) {

    var randomSentence = faker.lorem.sentence();
    //var listingName =  randomSentence.split(' ').join('_').slice(0, -1);
    var numOfSetOfImages = 5 + Math.floor(Math.random() * 5);

    var oneSetOfObject = {
      listingId: String(listingId),
      is_favorite: false,
      imageSets: []
    }

      for (var j = 0; j <= numOfSetOfImages; j++) {
        var randomId = createRandomNum();
        var caption = faker.lorem.sentence();
        caption = caption.slice(0, 6)
        var largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
        var smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;

          var imgSet = {
            [`photo${j + 1}_a`]: largeImgUrl,
            [`photo${j + 1}_b`]: smallImgUrl,
            [`photo${j + 1}_caption`]: `${caption}.`
          }
          oneSetOfObject.imageSets.push(imgSet);




      }
    listingId++;

    dataArray .push(JSON.stringify(oneSetOfObject));


  }

  return `${dataArray}`

}
//console.log(createDataSetPerRow(10001))

/*

let photoSchema = mongoose.Schema({
listingId: Number,
name: String,
is_favorite: Boolean,
imagesSet: [{
  photo1_a: String,
  photo1_b: String,
  photo1_caption: String
}]
});



*/

function writeStream (num) {

  for (var i = 0; i < 1000000; i++) {
    if (i === 0) {
    file.write(`[${createDataSetPerRow(num)},`)
    } else if (i === 999999){
      file.write(`${createDataSetPerRow(num)}]`)
    } else {
      file.write(`${createDataSetPerRow(num)},`)
    }
    num = num+10;
    //id = id+10;
  }

  file.end();
  }
//console.log(createDataSetPerRow(1000))

writeStream(10001)


