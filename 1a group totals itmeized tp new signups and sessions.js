// print('Signup + websessions today')

/*Start collection and dateRange as queryDoc used -------------* Start*/
var collName= 20180227 
/* Date range is 2018-02-26 00:00:00 -to- 2018-02-26 23:59:59 */
var dateRange= {"$gte":1519603200,"$lte":1519689599}
/* ------Query------------*/
var queryDoc= {"signed_up_at":{"$gte":1519603200,"$lte":1519689599}}
//* End collection and dateRange as querDoc used --------------* End*//


            
db.getCollection(`${collName}`)
.aggregate([ 
    { $match:  queryDoc  }

    ,{ $group:
        { _id : "$custom_attributes.api_plan_name",
           'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "Total of Plan Name" : {"$sum":1}
        }
     }
   ]
 )
     