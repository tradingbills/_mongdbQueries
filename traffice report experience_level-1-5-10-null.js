// print('Signup + Grouped on experience level')
/* range signed up, skill level */
var dateRange =  { '$gte': 1516867200, '$lte': 1516953599 } 

db.getCollection('20180127')
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
     