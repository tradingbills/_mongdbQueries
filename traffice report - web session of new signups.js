// print('Signup + websessions today')
/* range signed up, skill level */
var dateRange =  { '$gte': 1517040000, '$lte': 1517126399 }

db.getCollection('20180127')
.aggregate([ 
    { $match: {$and: [ { signed_up_at: dateRange } 
                ,{session_count:{$gt:1}}
              ]}
                
    }
    ,{ $group:
        { _id : null,
//            'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "Total web seesions" : {"$sum":1}
        }
     }
   ]
 )
     