
// import twit from node modules

var Twit = require('twit');

var config = require('./config');


// get auth connection keys
var T = new Twit(config);

T.get('search/tweets', { q: 'Avid learner', count: 3 }, function(err, data, response) {

  var tweet = data.statuses;

  for (var index = 0; index < tweet.length; index++) {
    console.log(tweet[index].text);
    
  }
  // console.log(data)
});

//posting

T.post('statuses/update', { status : 'Hey @iamfredrickoffi, my first bot is live.'}, callback);

function callback(error, data, response) {
  if (error) {
    console.log("Something went wrong!");
  } else {
    console.log("it worked.");
  }

}


//console.log(T)

