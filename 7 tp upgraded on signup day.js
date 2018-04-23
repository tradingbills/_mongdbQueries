var collName= 20180411 
// 2018-04-11 00:00:00 to 
// 2018-04-11 23:59:59
var dateRange= {"$gte":1523404800,"$lte":1523491199}
var queryDoc={}; queryDoc.signed_up_at = dateRange 


var paid = "59deb60085a3c22795133b02"
var free = "59dfe40a0a5037ff1c0bd8af"

queryDoc["segments.segments.id"] = paid;

db.getCollection(`${collName}`).aggregate([{"$match": queryDoc} 
    ,{"$group": {"_id": null,
                "Array Value for Paid and Signed up, by date range": {"$sum": 1},
     }          }
])