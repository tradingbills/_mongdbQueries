var collName= 20180411 
// 2018-04-11 00:00:00 to 
// 2018-04-11 23:59:59
var dateRange= {"$gte":1523404800,"$lte":1523491199}
var queryDoc={}; queryDoc.signed_up_at = dateRange 



db.getCollection(`${collName}`)
.aggregate([ 
    { $match: { signed_up_at: dateRange } }
    ,{ $group:
        { _id : "$custom_attributes.api_experience_level",
//            'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "Group Total" : {"$sum":1}
        }
     }
     ,{$sort:{_id : 1}}
   ]
 )