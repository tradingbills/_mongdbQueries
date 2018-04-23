var collName= 20180309 
// 2018-03-09 00:00:00 to 
// 2018-03-09 23:59:59
var dateRange= {"$gte":1520553600,"$lte":1520639999}
var queryDoc={}; queryDoc.signed_up_at = dateRange 

var paid = "59deb60085a3c22795133b02"
var free = "59dfe40a0a5037ff1c0bd8af"
var segPaidOrFree = paid

queryDoc["segments.segments.id"] = segPaidOrFree;

db.getCollection(`${collName}`).aggregate([{"$match": queryDoc}
  ,{ $project: { "_id":0,
                 "Plan Names": "$custom_attributes.api_plan_name", 
                 "Attribute Site Region":"$custom_attributes.site_region",
                 "Location Country Code": "$location_data.country_code",
                 "User id": "$user_id",
                 "User email": "$email"
     }          }
])
     