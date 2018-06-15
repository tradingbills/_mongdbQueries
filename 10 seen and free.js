var collName= 20180411 
// 2018-04-11 00:00:00 to 
// 2018-04-11 23:59:59
var dateRange= {"$gte":1523404800,"$lte":1523491199}
var queryDoc={}; queryDoc.signed_up_at = dateRange 


queryDoc = undefined
var queryDoc= {}
// var queryDoc
var     paid = "59deb60085a3c22795133b02"
var     free = "59dfe40a0a5037ff1c0bd8af"
var useSegId = free
var useRegId = "US/Canada Region"

queryDoc= {"last_request_at": dateRange, "segments.segments.id":useSegId, "custom_attributes.api_region_name": useRegId} 

queryDoc
db.getCollection(`${collName}`)
.aggregate([ 
    { $match: queryDoc           
    }
    ,{ $group:
        { _id : null,
//            'Plan Names': { $push: { api_plan_name : "$custom_attributes.api_plan_name", "User email": "$email", "User id": "$user_id"
//                                     }
//                           },
          "Total no activity" : {"$sum":1}, 
        }
     }
//      ,{ $project: {_id:0,
//                 "Plan Names": "$Plan Names",
//                 "Client id" : "$client_id"
//          }
    
  
//       }
   ]
 )
     