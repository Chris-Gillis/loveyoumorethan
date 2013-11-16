$(function() {
    tweetList = function tweetList() {
        var tweets = [];

        var self = this; // annoying, but done for scoping

        self.add = function add(newTweet) {
            if(!newTweet) {
                return;
            }

            tweets = [newTweet].concat(tweets);

            self.trigger("add", newTweet);
            return self;
        };

        self.getTweets = function getTweets() {
            return tweets;
        };

        $.observable(self);

        return self;
    };
});