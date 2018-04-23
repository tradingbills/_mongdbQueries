var collName= 20180419
// 2018-04-18 00:00:00 to 
// 2018-04-18 23:59:59
var dateRange= {"$gte":1524009600,"$lte":1524095999}
// -----------------------------------------------------
var queryDoc09 = {}, segments= {"id": "5a709f20e8a46fcd9c0c5d37", "name": "_HAS ACTIVITY"}
queryDoc09.last_request_at = dateRange
queryDoc09["segments.segments.id"] = {$ne:segments.id}
db.getCollection(`${collName}`).aggregate([ { $match: queryDoc09 }, { "$group": { _id: null,/* 'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}}, */  "Total Non-Activity": {"$sum": 1} } } ])