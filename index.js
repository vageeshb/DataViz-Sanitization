// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/yelp", function(err, db) {
  if(err) { return console.dir(err); }

  var businessCol = db.collection('business'),
  tipCol = db.collection('tip'),
  checkCol = db.collection('checkin'),
  reviewCol = db.collection('review'),
  userCol = db.collection('user'),
  business_ids = [],
  user_ids = [];

  // Remove all businesses that are not in Phoenix
  businessCol.remove({city: {$ne: "Phoenix"}}, function (err, num) {
  	console.log("Number of businesses removed: " + num);
  });

  // Remove all tips, checkins and reviews for the business that are not in phoenix
  businessCol.find({}, {business_id: true, _id: false}).toArray(function(err, items) {
  	items.forEach( function (it) {
  		business_ids.push(it.business_id);
  	});
  	tipCol.remove({business_id: {$nin: business_ids}}, function (err, num) {
  		console.log("Number of tips removed: " + num);
  	});
  	checkCol.remove({business_id: {$nin: business_ids}}, function (err, num) {
  		console.log("Number of checkins removed: " + num);
  	});
  	reviewCol.remove({business_id: {$nin: business_ids}}, function (err, num) {
  		console.log("Number of reviews removed: " + num);
  	});
  });

  // Remove all users that do not have any reviews
  reviewCol.find({}, {_id: false, user_id: true}).toArray( function(err, users) {
  	users.forEach( function(doc) {
  		user_ids.push(doc.user_id);
  	});
  	console.log("Total users with reviews: " + user_ids.length);
  	userCol.remove({user_id: {$nin: user_ids}}, function (err, num) {
  		console.log("Number of users removed: " + num);
  		db.close( function() {
  			console.log("Mongo DB Connection closed.\nAll operations executed.");
  		});
  	});
  });
});