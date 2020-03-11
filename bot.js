// console.log("Testing the console script")


// import twit from node modules

var Twit = require('twit');


// get auth connection keys
var T = new Twit({
    consumer_key:         'YOURCONSUMERKEY',
    consumer_secret:      'YOURCONSUMERSECRET',
    access_token:         'YOURACCESSTOKEN',
    access_token_secret:  'YOURACCESSTOKENSECRET'
  });