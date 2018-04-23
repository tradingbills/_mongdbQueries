// print('Signup + !(did not use')
//     "segments" : {
var searchSegment = "59deb60085a3c22795133b02"
//         "name" : "NO ACTIVITY"
//     }
var dateRange =  { '$gte': 1514793600, '$lte': 1517385599 }   

db.getCollection('20180129')
.aggregate([ 
    { $match: { 
              $and: [{ 
                     signed_up_at: dateRange } 
                     ,
                     {"segments.segments.id": searchSegment}          //  no activity 
                    ]
              }           
    }
    ,{ $group:
        { '_id' : "$custom_attributes.api_plan_name",
          'Plan Names': { $addToSet: { "api_plan_name" : "$custom_attributes.api_plan_name" }
                          },
          "count" : {"$sum":1}
        }
     }
     ,{ $project : {
                    'plan name': '$Plan Names   '
                    ,'count':1
                    }
    }
    ,{$sort: {count:-1}}
   ]
 )
     