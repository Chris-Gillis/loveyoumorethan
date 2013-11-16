/**
 * Created by minitosh on 11/8/13.
 */
$(function() {
    var myTweetList = new tweetList(),
        tweetPreview = $("#tweetPreview"),
        toHandle = $("#toHandle"),
        fromHandle = $("#fromHandle"),
        messageHandle = $("#messageHandle");



    $('form').on('submit', function(e) {
        e.preventDefault();
        var tweet = getTweet();
        var errors = validate(tweet);
        if(errors.hasErrors()) {
            console.log('The following errors occurred');
            console.log(errors);
            return false;
        }

        $("form").find("input[type=text]").val("");
        myTweetList.add(tweet);

        return false;
    });

    toHandle.keyup(updatePreview);
    fromHandle.keyup(updatePreview);
    messageHandle.keyup(updatePreview);

    function updatePreview() {
        var toVal = toHandle.val() || '_______';
        var fromVal = fromHandle.val() || '_______';
        var messageVal = messageHandle.val() || '_______';
        tweetPreview.html("Love is in the air! " + fromVal + " loves " + toVal + " more than " + messageVal + "! #lymt");
    }

    function getTweet() {
        var to = toHandle.val();
        var from = fromHandle.val();
        var message = messageHandle.val();
        return {
            to: to,
            from: from,
            message: message
        };
    }

    var requiredFields = [
        'from',
        'to',
        'message'
    ];

    function validate(tweet) {
        var error = {};
        _.forEach(requiredFields, function(f) {
            error[f] = !!tweet[f] ? undefined : 'Missing ' + f;
        });

        error.hasErrors = function() {
            return !!(error.to || error.from || error.message);
        }

        return error;
    }

    myTweetList.on("add", function(tweet) {
        $.post('/tweet', tweet);
    });

    updatePreview();

});