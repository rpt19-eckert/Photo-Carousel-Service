//generates listingId between 9500000 and 9500200
//only testing on the "most popular 200 listings"
function generateRandomListingId (context, events, done) {
  context.vars.listingId = Math.floor(Math.random() * 200) + 9500000;
  return done();
}

module.exports = {
  generateRandomListingId
};


