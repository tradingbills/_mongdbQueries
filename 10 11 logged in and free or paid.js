// print('Signup + websessions today')

/*Start collection and dateRange as queryDoc used -------------* Start*/
var collName= 20180226 
/* Date range is 2018-02-26 00:00:00 -to- 2018-02-26 23:59:59 */
var dateRange= {"$gte":1519603200,"$lte":1519689599}
/* ------Query------------*/
var queryDoc= {"signed_up_at":{"$gte":1519603200,"$lte":1519689599}}
//* End collection and dateRange as querDoc used --------------* End*//


queryDoc = undefined
var queryDoc= {}
// var queryDoc
var     paid = "59deb60085a3c22795133b02"
var     free = "59dfe40a0a5037ff1c0bd8af"
var useSegId = free

queryDoc= {"last_request_at": dateRange, "segments.segments.id":useSegId} 
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
     