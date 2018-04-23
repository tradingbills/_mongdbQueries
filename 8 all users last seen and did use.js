var collName= 20180411 
// 2018-04-11 00:00:00 to 
// 2018-04-11 23:59:59
var dateRange= {"$gte":1523404800,"$lte":1523491199}
var queryDoc={}; queryDoc.signed_up_at = dateRange 


var segments = {
  "id": "5a709f20e8a46fcd9c0c5d37",
  "name": "_HAS ACTIVITY"
}

var queryDoc1 = {}
queryDoc1.last_request_at = dateRange
queryDoc1["segments.segments.id"] = segments.id
db.getCollection(`${collName}`).aggregate([
  { $match: queryDoc1 }
  ,{ "$group": {
      _id: null,
//         'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
      "Total Activity": {
        "$sum": 1
      }
    }
  }])