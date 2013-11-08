
/*
 * Post Tweet
 * save to Datastore
 * send tweet
 */

exports.post = function(req, res){
    var tweeter = require('../tweeter.js').tweeter;
    console.log(tweeter);

    var to = req.body.to;
    var from = req.body.from;
    var message = req.body.message;
    var twtr = new tweeter({to: to, from: from, message: message});
    twtr.sendTweet();
    twtr.save();
    res.send({success: true});
};