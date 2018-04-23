/* WIP
   segment on PAID/FREE 
     PAID = 59deb60085a3c22795133b02
     FREE = 59dfe40a0a5037ff1c0bd8af
   signed up 30 days
   last seen date range 7 days
*/
var     PAID = "59deb60085a3c22795133b02"
var     FREE = "59dfe40a0a5037ff1c0bd8af"
var usePaidOrFree = PAID
db.getCollection('intercomUsers20180116')
.aggregate([
     {$match:{ "segments.segments.id":usePaidOrFree,
                // signed up : --startDate="2017-12-18" --endDate="2018-01-18"
                "signed_up_at" :{$gte:1513584000, $lte:1516348799},
                // last seen : --startDate="2018-01-11" --endDate="2018-01-18"
                "last_request_at" :{$gte:1515657600, $lte:1516348799}
              }
      }
 //   ,{$group:{ _id : "$custom_attributes.api_payment_frequency",
      ,{$group:{ _id : null,
                total:{$sum: 1}
             }
     }

      
])