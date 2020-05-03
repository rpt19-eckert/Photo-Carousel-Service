var faker = require ('faker');

let coverURL = 'https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover';
let otherURL = 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic';
let rndmURL  = 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic';
let p = 'photo';
let c = 'caption';
let sJ = 'Small.jpg';
let lJ = 'Large.jpg';
//img url, nested innerArray[0] = largePhoto ---innerArray[1] = smallPhoto
var imgUrlArray = [["https://tinyurl.com/ybz4y6cc", "https://tinyurl.com/ybtlbfx9"], ["https://tinyurl.com/y75ueu55", "https://tinyurl.com/y9lgqese"], ["https://tinyurl.com/yby8wpd6", "https://tinyurl.com/ycxz75nv"], ["https://tinyurl.com/yc8734ak", "https://tinyurl.com/yc5ooocr"], ["https://tinyurl.com/ycd3toa5", "https://tinyurl.com/yamly4t9"], ["https://tinyurl.com/ybeb8dw7", "https://tinyurl.com/y76klron"], ["https://tinyurl.com/yccpsxa9", "https://tinyurl.com/y7sw2edw"], ["https://tinyurl.com/yammbu6r", "https://tinyurl.com/ydc29nbq"], ["https://tinyurl.com/ycaeugpl"], ["https://tinyurl.com/yclatruv", "https://tinyurl.com/yaj929fw"], ["https://tinyurl.com/yanbkrod", "https://i.picsum.photos/id/110/720/455.jpg"], []]


var largeImg = "https://i.picsum.photos/id/111/1440/960.jpg"

var smallImg = "https://i.picsum.photos/id/110/720/455.jpg"
let caps = [`"This is The Dixie Daisy! We think you'll LOVE staying here."`, `'Super Cute Retro Airstream'`, `'Super Cute Retro Airstream'`, `'The Dixie Daisy backs up to the beautiful Smith Creek with 12 private acres to explore.'`, `'Mood lighting for an evening dip in the hot tub'`, `'The treehouse is a great place for a romantic picnic!'`, `'Queen size bed on an antique iron bed frame'`, `'Hammock bliss…'`, `'The living room has a full couch, table and chair, satellite tv, games, and books.'`, `'Super Cute Retro Airstream'`,  `'Strum your guitar and crack open and ice cold beer next to the fire'`, `'Super Cute Retro Airstream'`,  `'Super Cute Retro Airstream'`, `'Super Cute Retro Airstream'`, `'Dine al fresco under the twinkle lights.'`, `"The kitchen is stocked with pots, pans, dishes, and utensils. There's a gas stove and refrigerator, too."`, `'Super Cute Retro Airstream'`, `'Super Cute Retro Airstream'`, `'The outdoor shower has clothing hooks, a bench, and is big enough for two!'`, `'Take your morning shower under the canopy of the elm trees. What a way to start the day!'`, `'Super Cute Retro Airstream'`, `"The bathroom has been hard plumbed with a real toilet. There's an interior shower and hairdryer, too."`, `'The interior shower'`, `"Isn't she pretty all lit up at night?"`, `"Don't forget the charcoal and steaks for your bbq dinner!"`, `'Super Cute Retro Airstream'`, `'Super Cute Retro Airstream'`, `'cowgirl curtains'`, `'Super Cute Retro Airstream'`, `'Super Cute Retro Airstream'`];

let main_insert_query = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, ${p}6_a, ${p}6_b, ${p}6_${c}, ${p}7_a, ${p}7_b, ${p}7_${c}, ${p}8_a, ${p}8_b, ${p}8_${c}, ${p}9_a, ${p}9_b, ${p}9_${c}, ${p}10_a, ${p}10_b, ${p}10_${c}, ${p}11_a, ${p}11_b, ${p}11_${c}, ${p}12_a, ${p}12_b, ${p}12_${c}, ${p}13_a, ${p}13_b, ${p}13_${c}, ${p}14_a, ${p}14_b, ${p}14_${c}, ${p}15_a, ${p}15_b, ${p}15_${c}, ${p}16_a, ${p}16_b, ${p}16_${c}, ${p}17_a, ${p}17_b, ${p}17_${c}, ${p}18_a, ${p}18_b, ${p}18_${c}, ${p}19_a, ${p}19_b, ${p}19_${c}, ${p}20_a, ${p}20_b, ${p}20_${c}, ${p}21_a, ${p}21_b, ${p}21_${c}, ${p}22_a, ${p}22_b, ${p}22_${c}, ${p}23_a, ${p}23_b, ${p}23_${c}, ${p}24_a, ${p}24_b, ${p}24_${c}, ${p}25_a, ${p}25_b, ${p}25_${c}, ${p}26_a, ${p}26_b, ${p}26_${c}, ${p}27_a, ${p}27_b, ${p}27_${c}, ${p}28_a, ${p}28_b, ${p}28_${c}, ${p}29_a, ${p}29_b, ${p}29_${c}, ${p}30_a, ${p}30_b, ${p}30_${c}, createdAt) VALUES (10001, 'Super_Cute_Retro_Airstream', 0, '${coverURL}01${lJ}', '${coverURL}01${sJ}', ${caps[0]}, '${otherURL}02${lJ}', '${otherURL}02${sJ}', ${caps[1]}, '${otherURL}03${lJ}', '${otherURL}03${sJ}', ${caps[2]}, '${otherURL}04${lJ}', '${otherURL}04${sJ}', ${caps[3]}, '${otherURL}05${lJ}', '${otherURL}05${sJ}', ${caps[4]}, '${otherURL}06${lJ}', '${otherURL}06${sJ}', ${caps[5]}, '${otherURL}07${lJ}', '${otherURL}07${sJ}', ${caps[6]}, '${otherURL}08${lJ}', '${otherURL}08${sJ}', ${caps[7]}, '${otherURL}09${lJ}', '${otherURL}09${sJ}', ${caps[8]}, '${otherURL}10${lJ}', '${otherURL}10${sJ}', ${caps[9]}, '${otherURL}11${lJ}', '${otherURL}11${sJ}', ${caps[10]}, '${otherURL}12${lJ}', '${otherURL}12${sJ}', ${caps[11]}, '${otherURL}13${lJ}', '${otherURL}13${sJ}', ${caps[12]}, '${otherURL}14${lJ}', '${otherURL}14${sJ}', ${caps[13]}, '${otherURL}15${lJ}', '${otherURL}15${sJ}', ${caps[14]}, '${otherURL}16${lJ}', '${otherURL}16${sJ}', ${caps[15]}, '${otherURL}17${lJ}', '${otherURL}17${sJ}', ${caps[16]}, '${otherURL}18${lJ}', '${otherURL}18${sJ}', ${caps[17]}, '${otherURL}19${lJ}', '${otherURL}19${sJ}', ${caps[18]}, '${otherURL}20${lJ}', '${otherURL}20${sJ}', ${caps[19]}, '${otherURL}21${lJ}', '${otherURL}21${sJ}', ${caps[20]}, '${otherURL}22${lJ}', '${otherURL}22${sJ}', ${caps[21]}, '${otherURL}23${lJ}', '${otherURL}23${sJ}', ${caps[22]}, '${otherURL}24${lJ}', '${otherURL}24${sJ}', ${caps[23]}, '${otherURL}25${lJ}', '${otherURL}25${sJ}', ${caps[24]}, '${otherURL}26${lJ}', '${otherURL}26${sJ}', ${caps[25]}, '${otherURL}27${lJ}', '${otherURL}27${sJ}', ${caps[26]}, '${otherURL}28${lJ}', '${otherURL}28${sJ}', ${caps[27]}, '${otherURL}29${lJ}', '${otherURL}29${sJ}', ${caps[28]}, '${otherURL}30${lJ}', '${otherURL}30${sJ}', ${caps[29]}, CURDATE());`;

let insertQuery = (query_string, cb) => {
  db.query(query_string, (err, results) => {
    if (err) {
      throw err;
    } else {
      cb(results);
    }
  });
};

// insertQuery(main_insert_query, (results) => {
//   console.log('Successfully Inserted Listing 01: Super Cute Retro Airstream', results);
// });

//let capString

let listingNames = ["one_index_listing_names", "Super_Cute_Retro_Airstream", "Redundant_Driver_Strategic_house", "Multibyte_Program_Opensource_house", "Neural_Transmitter_Magnetic_house", "Haptic_Bandwidth_Leadingedge_house", "Primary_Harddrive_Killer_house", "Solidstate_Harddrive_Crossplatform_house", "Optical_Bandwidth_Robust_house", "Solidstate_Interface_Crossmedia_house", "Bluetooth_Port_Opensource_house", "Neural_Program_Bricksandclicks_house", "Online_Matrix_Usercentric_house", "Virtual_Transmitter_Interactive_house", "Virtual_System_Cuttingedge_house", "Bluetooth_Application_Robust_house", "Primary_Harddrive_B2C_house", "Haptic_Port_Transparent_house", "Haptic_Bus_Sexy_house", "Auxiliary_Feed_Cuttingedge_house", "Optical_Firewall_Clicksandmortar_house", "Auxiliary_Feed_Impactful_house", "Neural_Circuit_Outofthebox_house", "Bluetooth_Port_Compelling_house", "Bluetooth_Transmitter_Granular_house", "Optical_Bandwidth_Efficient_house", "Haptic_Port_Onetoone_house", "Online_Program_Intuitive_house", "Haptic_Protocol_Frontend_house", "Solidstate_Port_Valueadded_house", "Multibyte_Bandwidth_Proactive_house", "Opensource_Driver_Granular_house", "Wireless_Panel_Realtime_house", "Mobile_Port_Innovative_house", "Neural_Alarm_Bricksandclicks_house", "Digital_Feed_Revolutionary_house", "Auxiliary_System_Innovative_house", "1080p_Circuit_Scalable_house", "Auxiliary_Alarm_Onetoone_house", "Haptic_System_Worldclass_house", "1080p_Microchip_Ubiquitous_house", "Multibyte_System_Interactive_house", "Haptic_Firewall_Ebusiness_house", "Virtual_Feed_Proactive_house", "1080p_Bus_Viral_house", "Wireless_Matrix_Frictionless_house", "Bluetooth_Application_Revolutionary_house", "1080p_Application_Bricksandclicks_house", "Backend_Bus_24/365_house", "Mobile_Alarm_Granular_house", "Backend_Alarm_Bestofbreed_house", "Wireless_Panel_Clicksandmortar_house", "Crossplatform_Harddrive_Wireless_house", "Solidstate_Alarm_Robust_house", "Neural_Application_Intuitive_house", "Multibyte_Interface_Interactive_house", "Backend_System_Rich_house", "Backend_Feed_Usercentric_house", "Bluetooth_System_Realtime_house", "Multibyte_Alarm_24/7_house", "Mobile_Alarm_Dotcom_house", "Multibyte_Sensor_Opensource_house", "Auxiliary_Sensor_Endtoend_house", "Solidstate_Card_Cuttingedge_house", "Wireless_Interface_Interactive_house", "Auxiliary_Panel_Vertical_house", "Multibyte_Program_Wireless_house", "Crossplatform_Microchip_Synergistic_house", "Bluetooth_Matrix_Magnetic_house", "Mobile_Sensor_Missioncritical_house", "Virtual_Port_Bleedingedge_house", "Auxiliary_Bus_Bestofbreed_house", "Haptic_Alarm_B2B_house", "1080p_Array_Plugandplay_house", "Optical_Microchip_Revolutionary_house", "Digital_Card_B2C_house", "Bluetooth_Microchip_Webenabled_house", "1080p_Matrix_Impactful_house", "Neural_Feed_Enterprise_house", "Crossplatform_Matrix_Visionary_house", "Optical_Card_Proactive_house", "Redundant_Alarm_Plugandplay_house", "Redundant_Alarm_Seamless_house", "Wireless_Application_Endtoend_house", "Virtual_Panel_Scalable_house", "1080p_System_Visionary_house", "Solidstate_Bandwidth_Nextgeneration_house", "Crossplatform_System_Endtoend_house", "Wireless_Driver_Rich_house", "Backend_Matrix_Robust_house", "Opensource_Bandwidth_B2B_house", "Mobile_Pixel_Proactive_house", "Backend_Harddrive_Frictionless_house", "Auxiliary_Array_Ubiquitous_house", "Mobile_Pixel_Frictionless_house", "Online_Transmitter_Dotcom_house", "Bluetooth_Sensor_Revolutionary_house", "Crossplatform_Protocol_Granular_house", "Primary_Matrix_Realtime_house", "Crossplatform_Port_Wireless_house", "Online_Bus_Integrated_house"];
// var sentence = faker.lorem.sentence()
// console.log('sentence', sentence)
// var listingName = sentence.split(' ').join('_').slice(0, -1)
//console.log('listingName', listingName);
function createRandomNum () {
  var randomNumForImageFetch = 100 + Math.floor(Math.random() * 100);
  return randomNumForImageFetch;
}
function createDataSetPerRow (id) {
  var dataString = '';

  // for (var i = 0; i < 10; i++) {

    var randomSentence = faker.lorem.sentence();
    var listingName =  randomSentence.split(' ').join('_').slice(0, -1);


    var oneString = `${id}, ${listingName}, `

      for (var j = 0; j < 10; j++) {
        var randomId = createRandomNum();
        var caption = faker.lorem.sentence();
        var largeImgUrl = `https://i.picsum.photos/id/${randomId}/1440/960.jpg`;
        var smallImgUrl = `https://i.picsum.photos/id/${randomId}/720/455.jpg`;

        if (j === 10) {
          oneString += `${largeImgUrl}, ${smallImgUrl}, ${caption}`;
        } else {
          oneString += `${largeImgUrl}, ${smallImgUrl}, ${caption}, `;
        }
      }
      dataString += `${oneString};\n`;
  id+1;
//}
return dataString;

}
console.log(createDataSetPerRow(1))

// let capSplit = capString.split(' ');
// let capArr = [];

// for (let i = 0; i < capSplit.length; i+=3) {
//   capArr.push(`${capSplit[i]} ${capSplit[i+1]} ${capSplit[i+2]}`);
// }

// let random2102 = () => {
//   return Math.floor(Math.random() * 2102);
// };

// let random50 = () => {
//   return Math.ceil(Math.random() * 50);
// };

// let rndmCap = () => {
//   return capArr[random2102()];
// };

// let seedDB = () => {
//   for (let i = 2; i < 101; i++) {
//     if (i % 2 === 0 && i < 10) {
//       let randomNums = []
//       for (let j = 0; j < 14; j++) {
//         randomNums.push(random50());
//       }
//       let random_insert_query_15_underTen = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, ${p}6_a, ${p}6_b, ${p}6_${c}, ${p}7_a, ${p}7_b, ${p}7_${c}, ${p}8_a, ${p}8_b, ${p}8_${c}, ${p}9_a, ${p}9_b, ${p}9_${c}, ${p}10_a, ${p}10_b, ${p}10_${c}, ${p}11_a, ${p}11_b, ${p}11_${c}, ${p}12_a, ${p}12_b, ${p}12_${c}, ${p}13_a, ${p}13_b, ${p}13_${c}, ${p}14_a, ${p}14_b, ${p}14_${c}, ${p}15_a, ${p}15_b, ${p}15_${c}, createdAt) VALUES (${10000 + i}, '${listingNames[i]}', 0, '${coverURL}0${i}${lJ}', '${coverURL}0${i}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[0]}${lJ}', '${rndmURL}${randomNums[0]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[1]}${lJ}', '${rndmURL}${randomNums[1]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[2]}${lJ}', '${rndmURL}${randomNums[2]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[3]}${lJ}', '${rndmURL}${randomNums[3]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[4]}${lJ}', '${rndmURL}${randomNums[4]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[5]}${lJ}', '${rndmURL}${randomNums[5]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[6]}${lJ}', '${rndmURL}${randomNums[6]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[7]}${lJ}', '${rndmURL}${randomNums[7]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[8]}${lJ}', '${rndmURL}${randomNums[8]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[9]}${lJ}', '${rndmURL}${randomNums[9]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[10]}${lJ}', '${rndmURL}${randomNums[10]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[11]}${lJ}', '${rndmURL}${randomNums[11]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[12]}${lJ}', '${rndmURL}${randomNums[12]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[13]}${lJ}', '${rndmURL}${randomNums[13]}${sJ}', '${rndmCap()}', CURDATE());`;

//       insertQuery(random_insert_query_15_underTen, (results) => {
//         console.log('Successfully inserted listings into database', results);
//       });
//     } else if (i % 2 !== 0 && i < 10) {
//       let randomNums = []
//       for (let j = 0; j < 29; j++) {
//         randomNums.push(random50());
//       }
//       let random_insert_query_30_underTen = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, ${p}6_a, ${p}6_b, ${p}6_${c}, ${p}7_a, ${p}7_b, ${p}7_${c}, ${p}8_a, ${p}8_b, ${p}8_${c}, ${p}9_a, ${p}9_b, ${p}9_${c}, ${p}10_a, ${p}10_b, ${p}10_${c}, ${p}11_a, ${p}11_b, ${p}11_${c}, ${p}12_a, ${p}12_b, ${p}12_${c}, ${p}13_a, ${p}13_b, ${p}13_${c}, ${p}14_a, ${p}14_b, ${p}14_${c}, ${p}15_a, ${p}15_b, ${p}15_${c}, ${p}16_a, ${p}16_b, ${p}16_${c}, ${p}17_a, ${p}17_b, ${p}17_${c}, ${p}18_a, ${p}18_b, ${p}18_${c}, ${p}19_a, ${p}19_b, ${p}19_${c}, ${p}20_a, ${p}20_b, ${p}20_${c}, ${p}21_a, ${p}21_b, ${p}21_${c}, ${p}22_a, ${p}22_b, ${p}22_${c}, ${p}23_a, ${p}23_b, ${p}23_${c}, ${p}24_a, ${p}24_b, ${p}24_${c}, ${p}25_a, ${p}25_b, ${p}25_${c}, ${p}26_a, ${p}26_b, ${p}26_${c}, ${p}27_a, ${p}27_b, ${p}27_${c}, ${p}28_a, ${p}28_b, ${p}28_${c}, ${p}29_a, ${p}29_b, ${p}29_${c}, ${p}30_a, ${p}30_b, ${p}30_${c}, createdAt) VALUES (${10000 + i}, '${listingNames[i]}', 0, '${coverURL}0${i}${lJ}', '${coverURL}0${i}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[0]}${lJ}', '${rndmURL}${randomNums[0]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[1]}${lJ}', '${rndmURL}${randomNums[1]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[2]}${lJ}', '${rndmURL}${randomNums[2]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[3]}${lJ}', '${rndmURL}${randomNums[3]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[4]}${lJ}', '${rndmURL}${randomNums[4]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[5]}${lJ}', '${rndmURL}${randomNums[5]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[6]}${lJ}', '${rndmURL}${randomNums[6]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[7]}${lJ}', '${rndmURL}${randomNums[7]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[8]}${lJ}', '${rndmURL}${randomNums[8]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[9]}${lJ}', '${rndmURL}${randomNums[9]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[10]}${lJ}', '${rndmURL}${randomNums[10]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[11]}${lJ}', '${rndmURL}${randomNums[11]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[12]}${lJ}', '${rndmURL}${randomNums[12]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[13]}${lJ}', '${rndmURL}${randomNums[13]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[14]}${lJ}', '${rndmURL}${randomNums[14]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[15]}${lJ}', '${rndmURL}${randomNums[15]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[16]}${lJ}', '${rndmURL}${randomNums[16]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[17]}${lJ}', '${rndmURL}${randomNums[17]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[18]}${lJ}', '${rndmURL}${randomNums[18]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[19]}${lJ}', '${rndmURL}${randomNums[19]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[20]}${lJ}', '${rndmURL}${randomNums[20]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[21]}${lJ}', '${rndmURL}${randomNums[21]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[22]}${lJ}', '${rndmURL}${randomNums[22]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[23]}${lJ}', '${rndmURL}${randomNums[23]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[24]}${lJ}', '${rndmURL}${randomNums[24]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[25]}${lJ}', '${rndmURL}${randomNums[25]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[26]}${lJ}', '${rndmURL}${randomNums[26]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[27]}${lJ}', '${rndmURL}${randomNums[27]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[28]}${lJ}', '${rndmURL}${randomNums[28]}${sJ}', '${rndmCap()}', CURDATE());`;

//       insertQuery(random_insert_query_30_underTen, (results) => {
//         console.log('Successfully inserted listings into database', results);
//       });
//     } else if (i % 2 === 0 && i > 9) {
//       let randomNums = []
//       for (let j = 0; j < 14; j++) {
//         randomNums.push(random50());
//       }
//       let random_insert_query_15 = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, ${p}6_a, ${p}6_b, ${p}6_${c}, ${p}7_a, ${p}7_b, ${p}7_${c}, ${p}8_a, ${p}8_b, ${p}8_${c}, ${p}9_a, ${p}9_b, ${p}9_${c}, ${p}10_a, ${p}10_b, ${p}10_${c}, ${p}11_a, ${p}11_b, ${p}11_${c}, ${p}12_a, ${p}12_b, ${p}12_${c}, ${p}13_a, ${p}13_b, ${p}13_${c}, ${p}14_a, ${p}14_b, ${p}14_${c}, ${p}15_a, ${p}15_b, ${p}15_${c}, createdAt) VALUES (${10000 + i}, '${listingNames[i]}', 0, '${coverURL}${i}${lJ}', '${coverURL}${i}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[0]}${lJ}', '${rndmURL}${randomNums[0]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[1]}${lJ}', '${rndmURL}${randomNums[1]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[2]}${lJ}', '${rndmURL}${randomNums[2]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[3]}${lJ}', '${rndmURL}${randomNums[3]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[4]}${lJ}', '${rndmURL}${randomNums[4]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[5]}${lJ}', '${rndmURL}${randomNums[5]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[6]}${lJ}', '${rndmURL}${randomNums[6]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[7]}${lJ}', '${rndmURL}${randomNums[7]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[8]}${lJ}', '${rndmURL}${randomNums[8]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[9]}${lJ}', '${rndmURL}${randomNums[9]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[10]}${lJ}', '${rndmURL}${randomNums[10]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[11]}${lJ}', '${rndmURL}${randomNums[11]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[12]}${lJ}', '${rndmURL}${randomNums[12]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[13]}${lJ}', '${rndmURL}${randomNums[13]}${sJ}', '${rndmCap()}', CURDATE());`;

//       insertQuery(random_insert_query_15, (results) => {
//         console.log('Successfully inserted listings into database', results);
//       });
//     } else if (i % 2 !== 0 && i > 9) {
//       if (i % 3 === 0) {
//         let randomNums = []
//         for (let j = 0; j < 29; j++) {
//           randomNums.push(random50());
//         }
//         let random_insert_query_30_overTen = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, ${p}6_a, ${p}6_b, ${p}6_${c}, ${p}7_a, ${p}7_b, ${p}7_${c}, ${p}8_a, ${p}8_b, ${p}8_${c}, ${p}9_a, ${p}9_b, ${p}9_${c}, ${p}10_a, ${p}10_b, ${p}10_${c}, ${p}11_a, ${p}11_b, ${p}11_${c}, ${p}12_a, ${p}12_b, ${p}12_${c}, ${p}13_a, ${p}13_b, ${p}13_${c}, ${p}14_a, ${p}14_b, ${p}14_${c}, ${p}15_a, ${p}15_b, ${p}15_${c}, ${p}16_a, ${p}16_b, ${p}16_${c}, ${p}17_a, ${p}17_b, ${p}17_${c}, ${p}18_a, ${p}18_b, ${p}18_${c}, ${p}19_a, ${p}19_b, ${p}19_${c}, ${p}20_a, ${p}20_b, ${p}20_${c}, ${p}21_a, ${p}21_b, ${p}21_${c}, ${p}22_a, ${p}22_b, ${p}22_${c}, ${p}23_a, ${p}23_b, ${p}23_${c}, ${p}24_a, ${p}24_b, ${p}24_${c}, ${p}25_a, ${p}25_b, ${p}25_${c}, ${p}26_a, ${p}26_b, ${p}26_${c}, ${p}27_a, ${p}27_b, ${p}27_${c}, ${p}28_a, ${p}28_b, ${p}28_${c}, ${p}29_a, ${p}29_b, ${p}29_${c}, ${p}30_a, ${p}30_b, ${p}30_${c}, createdAt) VALUES (${10000 + i}, '${listingNames[i]}', 0, '${coverURL}${i}${lJ}', '${coverURL}${i}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[0]}${lJ}', '${rndmURL}${randomNums[0]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[1]}${lJ}', '${rndmURL}${randomNums[1]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[2]}${lJ}', '${rndmURL}${randomNums[2]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[3]}${lJ}', '${rndmURL}${randomNums[3]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[4]}${lJ}', '${rndmURL}${randomNums[4]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[5]}${lJ}', '${rndmURL}${randomNums[5]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[6]}${lJ}', '${rndmURL}${randomNums[6]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[7]}${lJ}', '${rndmURL}${randomNums[7]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[8]}${lJ}', '${rndmURL}${randomNums[8]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[9]}${lJ}', '${rndmURL}${randomNums[9]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[10]}${lJ}', '${rndmURL}${randomNums[10]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[11]}${lJ}', '${rndmURL}${randomNums[11]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[12]}${lJ}', '${rndmURL}${randomNums[12]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[13]}${lJ}', '${rndmURL}${randomNums[13]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[14]}${lJ}', '${rndmURL}${randomNums[14]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[15]}${lJ}', '${rndmURL}${randomNums[15]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[16]}${lJ}', '${rndmURL}${randomNums[16]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[17]}${lJ}', '${rndmURL}${randomNums[17]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[18]}${lJ}', '${rndmURL}${randomNums[18]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[19]}${lJ}', '${rndmURL}${randomNums[19]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[20]}${lJ}', '${rndmURL}${randomNums[20]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[21]}${lJ}', '${rndmURL}${randomNums[21]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[22]}${lJ}', '${rndmURL}${randomNums[22]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[23]}${lJ}', '${rndmURL}${randomNums[23]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[24]}${lJ}', '${rndmURL}${randomNums[24]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[25]}${lJ}', '${rndmURL}${randomNums[25]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[26]}${lJ}', '${rndmURL}${randomNums[26]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[27]}${lJ}', '${rndmURL}${randomNums[27]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[28]}${lJ}', '${rndmURL}${randomNums[28]}${sJ}', '${rndmCap()}', CURDATE());`;

//         insertQuery(random_insert_query_30_overTen, (results) => {
//           console.log('Successfully inserted listings into database', results);
//         });
//       } else {
//         let randomNums = []
//         for (let j = 0; j < 4; j++) {
//           randomNums.push(random50());
//         }
//         let random_insert_query_5 = `INSERT INTO Photos (listing_id, name, is_favorite, ${p}1_a, ${p}1_b, ${p}1_${c}, ${p}2_a, ${p}2_b, ${p}2_${c}, ${p}3_a, ${p}3_b, ${p}3_${c}, ${p}4_a, ${p}4_b, ${p}4_${c}, ${p}5_a, ${p}5_b, ${p}5_${c}, createdAt) VALUES (${10000 + i}, '${listingNames[i]}', 0, '${coverURL}${i}${lJ}', '${coverURL}${i}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[0]}${lJ}', '${rndmURL}${randomNums[0]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[1]}${lJ}', '${rndmURL}${randomNums[1]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[2]}${lJ}', '${rndmURL}${randomNums[2]}${sJ}', '${rndmCap()}', '${rndmURL}${randomNums[3]}${lJ}', '${rndmURL}${randomNums[3]}${sJ}', '${rndmCap()}', CURDATE());`;

//         insertQuery(random_insert_query_5, (results) => {
//           console.log('Successfully inserted listings into database', results);
//         });
//       }
//     }
//   }
// };

