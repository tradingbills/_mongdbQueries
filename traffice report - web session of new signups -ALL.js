// print('Signup + websessions today')
/* range signed up, skill level */
var dateRange =   { '$gte': 1516953600, '$lte': 1517039999 } //26
// var dateRange =   { '$gte': 1517040000, '$lte': 1517126399 } //27              
db.getCollection('20180127')
.aggregate([ 
    { $match: { "last_request_at": dateRange //4 
//               $and: [{ 
//                   signed_up_at: dateRange } 
//                ,{session_count:{$gt:1}}                                      // 1 web sessions
//                   , {"segments.segments.id":"5a6b87acebbb4beec08a18e5f"}          // 2 no activity
//                   , {"segments.segments.id":"59deb60085a3c22795133b02"}       // 3 Paid and signed up
        
//                   , {"segments.segments.id":"597f73a3c68541f075204f18"}       // 5 ap - logged in
// 
//               ]
                  }
                
    }
    ,{ $group:
        { _id : null,
//            'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          "Total no activity" : {"$sum":1}
        }
     }
   ]
 )
     