var collName= 20180419 
// 2018-04-19 00:00:00 to 
// 2018-04-19 23:59:59
var dateRange= {"$gte":1524096000,"$lte":1524182399}
// -----------------------------------------------------
var queryDoc08= {}, segments= {"id": "5a709f20e8a46fcd9c0c5d37", "name": "_HAS ACTIVITY" } 
queryDoc08.last_request_at= dateRange
queryDoc08["segments.segments.id"]= segments.id
db.getCollection(`${collName}`).aggregate([{ $match: queryDoc08 },{ "$group": {_id: null, 'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}}, "Total Activity": {"$sum": 1} } } ])