// print('All Users seen on selected date')
/* last seen */
var dateRange =  { '$gte': 1517212800, '$lte': 1517299199 }    
db.getCollection('20180129')
.aggregate([ 
    { $match: { "last_request_at": dateRange }          
    }
    ,{ $group:
        { _id : null,
//            'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "All user's activity for date" : {"$sum":1}
        }
     }
   ]
 )
     