/* WIP
   segment on PAID/FREE 
     PAID = 59deb60085a3c22795133b02
     FREE = 59dfe40a0a5037ff1c0bd8af
   last seen date range
*/
var     PAID = "59deb60085a3c22795133b02"
var     FREE = "59dfe40a0a5037ff1c0bd8af"
var usePaidOrFree = PAID
db.getCollection('intercomUsers20180116')
.aggregate([
     {$match:{ "segments.segments.id":usePaidOrFree }}
    ,{$group:{ _id : "$custom_attributes.api_payment_frequency",
                total:{$sum: 1}
             }
     }
])