var collName= 20180302 
// 2018-03-02 00:00:00 to 
// 2018-03-02 23:59:59
var dateRange= {"$gte":1519948800,"$lte":1520035199}
var queryDoc; queryDoc.signed_up_at = dateRange 


db.getCollection(`${collName}`)
.aggregate([ 
    { $match:  queryDoc  }
    ,{ $group:
        { _id : "$custom_attributes.site_region",
           'Plan Names': { $addToSet: { "Plan Name" : "$custom_attributes.api_plan_name"}},
          "Total For Region" : {"$sum":1}
       }}
])
     