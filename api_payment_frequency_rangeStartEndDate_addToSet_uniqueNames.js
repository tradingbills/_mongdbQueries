/* api_payment_frequency by range by date */
db.getCollection('intercomUsers20180117')
.aggregate
(
  [ 
    {
      $match: {"signed_up_at" :{$gte:1516176000, $lte:1516262399}}
    },
    {
      $group:
        {
          _id : "$custom_attributes.api_payment_frequency",
          'Plan Names': { $addToSet: { api_plan_name : "$custom_attributes.api_plan_name"}},
          count : {"$sum":1}
        }
     } 
   ]
 )