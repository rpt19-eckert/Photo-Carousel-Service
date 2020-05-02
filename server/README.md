#CRUD API

##DELETE    /deleteSet
####Delete a set of data from Photos Table
Parameter: listingId - number
req.body = {
 listingId: 10012,
}
######Response Sample
{
    "fieldCount": 0,
    "affectedRows": 0,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

##GET  /:id/rec-photos
####Get a set of photos according to the given listingId
Parameter: :id - number

######Response Sample
 {
    "photo1": "https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover01Small.jpg",
    "photo2": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic02Small.jpg",
    "photo3": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic03Small.jpg",
    "photo4": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic04Small.jpg",
    "photo5": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic05Small.jpg",
    "photo6": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic06Small.jpg",
    "photo7": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic07Small.jpg",
    "photo8": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic08Small.jpg",
    "photo9": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic09Small.jpg",
    "photo10": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic10Small.jpg",
    "photo11": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic11Small.jpg",
    "photo12": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic12Small.jpg",
    "photo13": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic13Small.jpg",
    "photo14": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic14Small.jpg",
    "photo15": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic15Small.jpg",
    "photo16": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic16Small.jpg",
    "photo17": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic17Small.jpg",
    "photo18": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic18Small.jpg",
    "photo19": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic19Small.jpg",
    "photo20": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic20Small.jpg",
    "photo21": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic21Small.jpg",
    "photo22": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic22Small.jpg",
    "photo23": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic23Small.jpg",
    "photo24": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic24Small.jpg",
    "photo25": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic25Small.jpg",
    "photo26": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic26Small.jpg",
    "photo27": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic27Small.jpg",
    "photo28": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic28Small.jpg",
    "photo29": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic29Small.jpg",
    "photo30": "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic30Small.jpg"
}


##POST    /postListingSet
#### Add new set of listing data to database

##PUT    /updatePhotoFromId
####Updates a photo url from given listingId
parameters: listingId - number
            item - string
            photoUrl - string

req.body = {
 listingId: 10012,
 item: 'photo6_a',
 photoUrl: 'http//photo.site.com'
}

######Response Sample:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 34,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}

##GET    /listing-info
#### gets the array of data from one data set from the photos table

parameter:
req.query {
 listingId: 10001
}

######Response Sample:
{
    id: 20,
    listing_id: 10020,
    name: 'Optical_Firewall_Clicksandmortar_house',
    is_favorite: 0,
    photo1_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover20Large.jpg',
    photo1_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover20Small.jpg',
    photo1_caption: 'pug mustache ramps.',
    photo2_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic2Large.jpg',
    photo2_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic2Small.jpg',
    photo2_caption: 'health goth PBR&B',
    photo3_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic4Large.jpg',
    photo3_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic4Small.jpg',
    photo3_caption: 'banjo franzen coloring',
    photo4_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic30Large.jpg',
    photo4_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic30Small.jpg',
    photo4_caption: 'tbh tousled literally',
    photo5_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic2Large.jpg',
    photo5_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic2Small.jpg',
    photo5_caption: 'organic before they',
    photo6_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic39Large.jpg',
    photo6_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic39Small.jpg',
    photo6_caption: 'humblebrag swag ennui.',
    photo7_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic7Large.jpg',
    photo7_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic7Small.jpg',
    photo7_caption: 'Tofu knausgaard blue',
    photo8_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic16Large.jpg',
    photo8_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic16Small.jpg',
    photo8_caption: 'park, trust fund',
    photo9_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic4Large.jpg',
    photo9_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic4Small.jpg',
    photo9_caption: 'woke edison bulb',
    photo10_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic5Large.jpg',
    photo10_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic5Small.jpg',
    photo10_caption: 'Irony fam occupy',
    photo11_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic25Large.jpg',
    photo11_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic25Small.jpg',
    photo11_caption: 'booth. Tacos edison',
    photo12_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic18Large.jpg',
    photo12_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic18Small.jpg',
    photo12_caption: 'deep v wayfarers',
    photo13_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic31Large.jpg',
    photo13_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic31Small.jpg',
    photo13_caption: 'brooklyn pabst bitters.',
    photo14_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic19Large.jpg',
    photo14_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic19Small.jpg',
    photo14_caption: 'it gastropub readymade',
    photo15_a: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic25Large.jpg',
    photo15_b: 'https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/randomListingPic25Small.jpg',
    photo15_caption: 'level shaman pitchfork',
    photo16_a: null,
    photo16_b: null,
    photo16_caption: null,
    photo17_a: null,
    photo17_b: null,
    photo17_caption: null,
    photo18_a: null,
    photo18_b: null,
    photo18_caption: null,
    photo19_a: null,
    photo19_b: null,
    photo19_caption: null,
    photo20_a: null,
    photo20_b: null,
    photo20_caption: null,
    photo21_a: null,
    photo21_b: null,
    photo21_caption: null,
    photo22_a: null,
    photo22_b: null,
    photo22_caption: null,
    photo23_a: null,
    photo23_b: null,
    photo23_caption: null,
    photo24_a: null,
    photo24_b: null,
    photo24_caption: null,
    photo25_a: null,
    photo25_b: null,
    photo25_caption: null,
    photo26_a: null,
    photo26_b: null,
    photo26_caption: null,
    photo27_a: null,
    photo27_b: null,
    photo27_caption: null,
    photo28_a: null,
    photo28_b: null,
    photo28_caption: null,
    photo29_a: null,
    photo29_b: null,
    photo29_caption: null,
    photo30_a: null,
    photo30_b: null,
    photo30_caption: null,
    createdAt: 2020-03-31T06:00:00.000Z,
    updatedAt: null
  }

  ##POST    /favorite
  #### Add or remove listing as favorite

  Parameter
  listing - number
  req.body {
    listing: 10001
  }

######Response Sample:
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 34,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}









