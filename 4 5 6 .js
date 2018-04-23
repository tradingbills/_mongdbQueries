var collName= 20180420 
// 2018-04-19 00:00:00 to 
// 2018-04-19 23:59:59
var dateRange= {"$gte":1524096000,"$lte":1524182399}
// -----------------------------------------------------
var queryDoc040506={}; queryDoc040506.signed_up_at = dateRange
db.getCollection(`${collName}`)
.aggregate([ { $match: { signed_up_at: dateRange } } ,{ $group: { _id : "$custom_attributes.api_experience_level", /* 'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}}, */ "Grouped by skill, sum" : {"$sum":1} } } ,{ $sort:{_id : 1} } ])