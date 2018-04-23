var collName= 20180419
// 2018-04-18 00:00:00 to 
// 2018-04-18 23:59:59
var dateRange= {"$gte":1524009600,"$lte":1524095999}
// -----------------------------------------------------
var queryDoc11={}; queryDoc11.signed_up_at = dateRange 
queryDoc11 = undefined
var queryDoc11= {}, paid = "59deb60085a3c22795133b02", free = "59dfe40a0a5037ff1c0bd8af"
var useSegId = paid
queryDoc11= {"last_request_at": dateRange, "segments.segments.id":useSegId} 
db.getCollection(`${collName}`).aggregate([ { $match: queryDoc11 },{ $group: { _id : null,/* 'Plan Names': { $push: { api_plan_name : "$custom_attributes.api_plan_name", "User email": "$email", "User id": "$user_id" } }, */ "Total non activity" : {"$sum":1} } }
/* ,{ $project: { _id: 0, "Plan Names": "$Plan Names" "Client id" : "$client_id" } } */
])