exports.tweeter = function(tweet) {
    this.tweet = tweet;

    this.save = function() {
        // save to data store, perhaps redis
    }

    this.sendTweet = function() {
        var Twit = require('twit');

        var twit = new Twit({
              consumer_key:        process.env.TWITTER_CONSUMER_KEY
            , consumer_secret:     process.env.TWITTER_CONSUMER_SECRET
            , access_token:        process.env.TWITTER_ACCESS_TOKEN
            , access_token_secret: process.env.TWITTER_TOKEN_SECRET
        });

        twit.post('statuses/update', {status: constructTweet()}, function(err, reply) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("Success!");
            }
        });
    };

    function constructTweet() {
        var tweetString = 'Love is in the air! ' + tweet.from + ' loves ' + tweet.to + ' more than ' + tweet.message +'! #lymt';
        if(tweetString.length > 140) {
            tweetString = '.' + tweetString.slice(20);
        }
        return tweetString;
    }
};