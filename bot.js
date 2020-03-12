// console.log("Testing the console script")


// import twit from node modules

var Twit = require('twit');

var config = require('./config')


// get auth connection keys
var T = new Twit(config);

T.get('search/tweets', { q: '@iamfredrickoffi', count: 100 }, function(err, data, response) {
  console.log(data)
})


//console.log(T)

