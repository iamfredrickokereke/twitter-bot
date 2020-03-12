// console.log("Testing the console script")


// import twit from node modules

var Twit = require('twit');

var config = require('./config')


// get auth connection keys
var T = new Twit(config);

T.get('search/tweets', { q: 'Esutboy', count: 3 }, function(err, data, response) {

  var tweet = data.statuses;

  for (var index = 0; index < tweet.length; index++) {
    console.log(tweet[index].text);
    
  }
  // console.log(data)
})



//console.log(T)

