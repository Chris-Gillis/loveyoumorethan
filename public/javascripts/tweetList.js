$(function() {
    tweetList = function tweetList() {
      //  var _ = require('lodash');

        var tweets = [];

        var self = this; // annoying, but done for scoping

        self.add = function add(newTweet) {
            var tweet = tweetCheck(newTweet);
            tweets = [tweet].concat(tweets);

            self.trigger("add", tweet);
            return self;
        };

        self.getTweets = function getTweets() {
            return tweets;
        };

        var requiredFields = [
            'from',
            'to',
            'message'
        ];

        var tweetCheck = function(tweet) {
            _.forEach(requiredFields, function(f) {
                if(!tweet[f]) {
                    throw Error("Missing field: " + f);
                }
            });

            return tweet;
        };

        $.observable(self);

        return self;
    };
});