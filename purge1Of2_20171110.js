// cutOffDate ex 2017-11-10 - 25 days = 2017-10-17 (1508200611)
// var cutOffDate = moment().subtract(25, 'days').format('X');
var cutOffDate = 1508200611;

db.getCollection('intercomUsers20171109').find({
  $and: [
	{"custom_attributes.plan_id" : 244 },
	{"last_request_at": { $lt: cutOffDate }}  
  ]
}).count()