var collName= 20180419
// 2018-04-18 00:00:00 to 
// 2018-04-18 23:59:59
var dateRange= {"$gte":1524009600,"$lte":1524095999}
// -----------------------------------------------------
var queryDoc01={}; queryDoc01.signed_up_at = dateRange
db.getCollection(`${collName}`).aggregate([ { "$match": queryDoc01 }, { "$group":{ "_id" : null,/* "Plan Names": { "$addToSet": { "api_plan_name" : "$custom_attributes.api_plan_name"}}, */ "SignUps" : {"$sum":1} } } ]) 