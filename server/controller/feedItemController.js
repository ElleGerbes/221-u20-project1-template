//make available user model
const feedItem = require('../model/feedItem')

var feedItems = [];
var feedItem1 = feedItem.createfeedItem("Summer High School Classes", 'Students from high schools across the state come to learn at Marist.', 'https://www.newburghschools.org/', '/images/hancock.jpeg');
var feedItem2 = feedItem.createfeedItem('Incoming News From The Marist Circle', 'Keep up to date with current news from around campus.', 'https://www.maristcircle.com/', '/images/news_pic.jpg'); 
var feedItem3 = feedItem.createfeedItem('Dining Hall Improved', 'New food in the Marist Dining Hall. Something for everyone!', 'https://www.marist.edu/', '/images/fox.jpeg');
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

exports.getfeedItems = function(req, res) {
    res.setHeader('Content-Type', 'applicaiton/json');
    res.send(JSON.stringify(feedItems));
}

exports.savefeedItem = function(req, res){
    let newfeedItem = feedItem.createfeedItem(req.body.Title, req.body.Body, req.body.linkUrl, req.body.imageUrl);
    feedItems.push(newfeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedItems));
}

exports.getfeedItem = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.feedItemID]);
}

exports.deletefeedItem = function(req, res){
    feedItems.splice(req.params.feedItemID, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.updatefeedItem = function (req, res){
    var updatedfeedItem = feedItems[req.params.feedItemID];
    if(req.body.Title) 
        updatedfeedItem.Title = req.body.Title;
    if (req.body.Body)
        updatedfeedItem.Body = req.body.Body;
    if (req.body.linkUrl)
        updatedfeedItem.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedfeedItem.imageUrl = req.body.imageUrl;

    feedItems[req.params.feedItemID] = updatedfeedItem;

    res.setHeader('Content-Type', 'applicaiton/json');
    res.send(feedItems[req.params.feedItemID]);
}