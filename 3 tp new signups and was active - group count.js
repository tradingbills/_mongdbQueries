// print('Signup + !(did not use')
//     "segments" : {
var searchSegment = "5a6b87acebbb4beec08a8e5f"
//         "name" : "NO ACTIVITY"
//     }
var dateRange =  { '$gte': 1517212800, '$lte': 1517299199 }    

db.getCollection('20180129')
.aggregate([ 
    { $match: { 
              $and: [{ 
                     signed_up_at: dateRange } 
                     , {"segments.segments.id": {$ne: searchSegment}}          //  no activity 
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
     