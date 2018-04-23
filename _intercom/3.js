var collName= 20180420 
// 2018-04-19 00:00:00 to 
// 2018-04-19 23:59:59
var dateRange= {"$gte":1524096000,"$lte":1524182399}
// -----------------------------------------------------
var queryDoc03={}, segments= { "id": "5a709f20e8a46fcd9c0c5d37","name": "_HAS ACTIVITY"}
queryDoc03.signed_up_at= dateRange
queryDoc03.last_request_at= dateRange
queryDoc03["segments.segments.id"]= {$ne:segments.id}
db.getCollection(`${collName}`).aggregate([ { $match: queryDoc03 }, { "$group": {"_id": null, /* 'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}}, */ "Total Non-Activity": {"$sum": 1} } } ])