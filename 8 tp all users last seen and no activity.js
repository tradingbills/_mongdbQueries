// print('All Users seen on selected date')
//     "segments" : {
var searchSegment = "5a6b87acebbb4beec08a8e5f"
//         "name" : "NO ACTIVITY"
//     }
var dateRange =  { '$gte': 1517212800, '$lte': 1517299199 }    
db.getCollection('20180129')
.aggregate([ 
    { $match: { 
                $and: [{ 
                 "last_request_at": dateRange } 
                  , {"segments.segments.id":  searchSegment}          //  no activity 
              ]
            }          
    }
    ,{ $group:
        { _id : null,
//            'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "All user's activity for date" : {"$sum":1}
        }
     }
   ]
 )
     