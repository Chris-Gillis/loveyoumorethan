/**
 * Created by minitosh on 11/8/13.
 */
$(function() {
    var myTweetList = new tweetList();

    $('form').on('submit', function(e) {
        e.preventDefault();
        var tweet = getTweet();
        myTweetList.add(tweet);

        return false;
    });

    function getTweet() {
        var to = $("#toHandle").val();
        var from = $("#fromHandle").val();
        var message = $("#message").val();
        $("form").find("input[type=text]").val("");
        return {
            to: to,
            from: from,
            message: message
        };
    }

    myTweetList.on("add", function(tweet) {
        $.post('/tweet', tweet);
    });

});