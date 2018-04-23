var collName= 20180309 
// 2018-03-01 00:00:00 to 
// 2018-03-09 23:59:59
var dateRange= {"$gte":1519862400,"$lte":1519948799}
var queryDoc={}; queryDoc.signed_up_at = dateRange 

queryDoc["custom_attributes.entered_address"] = true;

db.getCollection(`${collName}`).aggregate([{"$match": queryDoc} 

    ,{"$group": {"_id": null,

                "entered_address equals true, by date range": {"$sum": 1},

     }          }

])